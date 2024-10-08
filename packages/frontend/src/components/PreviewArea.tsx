import { useMemo, useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player"
import { Play, Pause, ChevronFirst, ChevronLast } from 'lucide-react';
import { Sentence, Transcript } from "../types/transcript";
import Switch from "./Switch";

interface PreviewAreaProps {
  videoUrl: string;
  playing: boolean;
  progress: number;
  transcript: Transcript;
  handlePlayPause: () => void;
  onProgress: (state: { played: number }) => void;
  handleDuration: (duration: number) => void;
  seekTime: number | null;
}

const PreviewArea: React.FC<PreviewAreaProps> = ({
  videoUrl,
  playing,
  progress,
  transcript,
  handlePlayPause,
  onProgress,
  handleDuration,
  seekTime
}) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [highlightPlayMode, setHighlightPlayMode] = useState(false);
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);
  const [internalProgress, setInternalProgress] = useState(0)

  useEffect(() => {
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer();
      if (player?.getDuration) {
        setVideoDuration(player.getDuration());
      }
    }
  }, []);

  useEffect(() => {
    if (seekTime !== null && playerRef.current) {
      playerRef.current.seekTo(seekTime);
    }
  }, [seekTime]);

  const formatTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, '0');
    return `${mm}:${ss}`;
  };

  const timestampToSeconds = (timestamp: string): number => {
    const [minutes, seconds] = timestamp.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  const sentences = useMemo(() => {
    return transcript.filter((item): item is Sentence => item.type === 'sentence')
  }, [transcript]);

  const transcriptDuration = useMemo(() => {
    if (sentences.length === 0) return 0;
    const lastSentence = sentences[sentences.length - 1];
    return timestampToSeconds(lastSentence.timestamp);
  }, [sentences]);

  const effectiveDuration = Math.max(videoDuration, transcriptDuration);


  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - bounds.left) / bounds.width;
    playerRef.current?.seekTo(percent);
  }

  const handleSeekStart = () => {
    if(playerRef.current) {
      playerRef.current.seekTo(0);
    }
  }
  const handleSeekEnd = () => {
    if(playerRef.current) {
      playerRef.current.seekTo(effectiveDuration);
    }
  }

  const highlightSentences = useMemo(() => {
    return sentences.filter(sentence => sentence.isHighlight);
  }, [sentences]);

  useEffect(() => {
    if(highlightPlayMode && playing) {
      const currentTime = internalProgress * effectiveDuration;
      if(currentHighlightIndex < highlightSentences.length) {
        const current = highlightSentences[currentHighlightIndex];
        const currentHighlightTime = timestampToSeconds(current.timestamp);
        
        if (currentTime >= currentHighlightTime) {
          // 移動到下一個highlight部分
          setCurrentHighlightIndex(currentHighlightIndex + 1);
          if (currentHighlightIndex + 1 < highlightSentences.length) {
            const nextHighlightTime = timestampToSeconds(highlightSentences[currentHighlightIndex + 1].timestamp);
            playerRef.current?.seekTo(nextHighlightTime / effectiveDuration);
          } else {
            // 所有highlight部分播放完畢，停止播放但保持highlight模式
            handlePlayPause();
          }
        } else if (currentTime < currentHighlightTime) {
          // 如果進度在當前highlight時間之前，跳轉到該時間點
          playerRef.current?.seekTo(currentHighlightTime / effectiveDuration);
        }
      }
    }
  }, [highlightPlayMode, playing, internalProgress, currentHighlightIndex, highlightSentences, effectiveDuration, handlePlayPause]);

  const toggleHighlightPlayMode = (newValue: boolean) => {
    setHighlightPlayMode(newValue);
    if (!newValue) {
      return;
    }
    
    setCurrentHighlightIndex(0);
    if (!playing) {
      handlePlayPause();
    }
    // 切換到highlight模式時，跳轉到第一個highlight時間點
    if (highlightSentences.length > 0) {
      const firstHighlightTime = timestampToSeconds(highlightSentences[0].timestamp);
      playerRef.current?.seekTo(firstHighlightTime / effectiveDuration);
    }
    return;
  };

  const handleInternalProgress = (state: { played: number }) => {
    setInternalProgress(state.played);
    onProgress(state);
  };


  return (
    <section id="Preview" className="bg-gray-900 h-full p-4">      
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">Preview</h2>
        <div className="flex items-center">
          <span className="text-white mr-2">Highlight Mode</span>
          <Switch value={highlightPlayMode} onClick={toggleHighlightPlayMode} />
        </div>
      </div>
      <div className="relative">
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          width="100%"
          height="400px"
          url={videoUrl}
          playing={playing}
          controls={false}
          light={false}
          pip={true}
          onProgress={handleInternalProgress}
          onDuration={(d) => {
            setVideoDuration(d);
            handleDuration(d);
          }}
        />
      </div>
      <div id="video-controls" className="mt-4 bg-gray-800 p-2 rounded">
        <div id="control-buttons" className="flex items-center justify-between mb-2">
          <div className="flex space-x-12">
            <button 
              id="seek-start"
              onClick={handleSeekStart}
              className="text-white p-2 rounded hover:bg-gray-700"
            >
              <ChevronFirst size={24} />
            </button>
            <button
              id="play-pause"
              onClick={handlePlayPause}
              className="text-white p-2 rounded hover:bg-gray-700"
            >
              {playing ? <Pause className="mr-1" size={24} /> : <Play className="mr-1" size={24} />}
            </button>
            <button 
              id="seek-end" 
              onClick={handleSeekEnd}
              className="text-white p-2 rounded hover:bg-gray-700"
            >
              <ChevronLast size={24} />
            </button>
          </div>
          <span id="time-display" className="text-white text-2xl">{formatTime(progress * videoDuration)}</span>
        </div>
        <div
          id="progress-bar"
          className="h-4 bg-gray-700 rounded cursor-pointer relative"
          onClick={handleSeek}
        >
          {sentences.map((sentence, index) => {
            const startTime = timestampToSeconds(sentence.timestamp);
            const endTime = index < sentences.length - 1 
              ? timestampToSeconds(sentences[index + 1].timestamp)
              : effectiveDuration;
            const width = ((endTime - startTime) / effectiveDuration) * 100;
            const left = (startTime / effectiveDuration) * 100;

            return (
              <div
                key={sentence.id}
                id={`transcript-section-${sentence.id}`}
                className={`absolute h-full ${sentence.isHighlight ? 'bg-blue-500' : 'bg-gray-500'}`}
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                  zIndex: sentence.isHighlight ? 1 : 0,
                }}
              />
            );
          })}
          <div
            id="progress-indicator"
            className="absolute h-full w-0.5 bg-red-500"
            style={{ 
              left: `${Math.min((progress * videoDuration) / effectiveDuration * 100, 100)}%`, 
              zIndex: 2 
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default PreviewArea
