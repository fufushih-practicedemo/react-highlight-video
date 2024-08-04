import { useMemo, useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player"
import { Play, Pause, ChevronFirst, ChevronLast } from 'lucide-react';
import { Sentence, Transcript } from "../types/transcript";

interface PreviewAreaProps {
  videoUrl: string;
  playing: boolean;
  progress: number;
  transcript: Transcript;
  handlePlayPause: () => void;
  handleProgress: (state: { played: number }) => void;
  handleDuration: (duration: number) => void;
  seekTime: number | null;
}

const PreviewArea: React.FC<PreviewAreaProps> = ({
  videoUrl,
  playing,
  progress,
  transcript,
  handlePlayPause,
  handleProgress,
  handleDuration,
  seekTime
}) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [videoDuration, setVideoDuration] = useState(0);

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

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - bounds.left) / bounds.width;
    playerRef.current?.seekTo(percent);
  }

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

  return (
    <section id="Preview" className="bg-gray-900 h-full p-4">      
      <h2 className="text-2xl font-bold mb-4 text-white">Preview</h2>
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
          onProgress={handleProgress}
          onDuration={(d) => {
            setVideoDuration(d);
            handleDuration(d);
          }}
        />
      </div>
      <div id="video-controls" className="mt-4 bg-gray-800 p-2 rounded">
        <div id="control-buttons" className="flex items-center justify-between mb-2">
          <div className="flex space-x-12">
            <button id="seek-start" className="text-white p-2 rounded hover:bg-gray-700">
              <ChevronFirst size={24} />
            </button>
            <button
              id="play-pause"
              onClick={handlePlayPause}
              className="text-white p-2 rounded hover:bg-gray-700"
            >
              {playing ? <Pause className="mr-1" size={24} /> : <Play className="mr-1" size={24} />}
            </button>
            <button id="seek-end" className="text-white p-2 rounded hover:bg-gray-700">
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
