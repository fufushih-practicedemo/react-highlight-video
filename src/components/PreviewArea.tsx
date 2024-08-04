import { useEffect, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player"
import { Transcript } from "../types/transcript";

const PreviewArea = () => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);

  const [mockTranscript, setMockTranscript] = useState<Transcript>([]);

  useEffect(() => {
    if (duration) {
      const adjustedTranscript: Transcript = [
        { id: 1, text: "歡迎來到我們的產品展示。", timestamp: "00:00" },
        { id: 2, text: "今天，我們將展示我們最新的創新。", timestamp: formatTime(duration * 0.1), isHighlight: true },
        { id: 3, text: "我們的產品有三個主要特點。", timestamp: formatTime(duration * 0.3) },
        { id: 4, text: "第一，它非常容易使用。", timestamp: formatTime(duration * 0.5), isHighlight: true },
        { id: 5, text: "第二，它非常高效。", timestamp: formatTime(duration * 0.7) },
        { id: 6, text: "第三，它非常經濟實惠。", timestamp: formatTime(duration * 0.9), isHighlight: true },
      ];
      setMockTranscript(adjustedTranscript);
    }
  }, [duration]);

  const handlePlayPause = () => {
    setPlaying(!playing);
  }

  const handleProgress = (state: { played: number }) => {
    setProgress(state.played)
  }

  const handleDuration = (duration: number) => {
    setDuration(duration);
  }

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

  const highlightRanges = useMemo(() => {
    const ranges: {start: number, end: number}[] = [];
    mockTranscript.forEach((sentence, index) => {
      if (sentence.isHighlight) {
        const start = timestampToSeconds(sentence.timestamp);
        const end = index < mockTranscript.length - 1 
          ? timestampToSeconds(mockTranscript[index + 1].timestamp)
          : duration;
        ranges.push({start, end});
      }
    });
    return ranges;
  }, [mockTranscript, duration]);

  return (
    <section id="Preview" className="bg-gray-900 p-4">
      <div className="relative">
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          width="100%"
          height="400px"
          url={'https://www.youtube.com/watch?v=kI6Ssgg5HLA'}
          playing={playing}
          controls={false}
          light={false}
          pip={true}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
      </div>
      <div id="video-controls" className="mt-4 bg-gray-800 p-2 rounded">
        <div id="control-buttons" className="flex items-center justify-between mb-2">
          <div className="flex space-x-2">
            <button id="seek-start" className="text-white p-2 rounded hover:bg-gray-700">
              最左
            </button>
            <button
              id="play-pause"
              onClick={handlePlayPause}
              className="text-white p-2 rounded hover:bg-gray-700"
            >
              {playing ? '暫停' : '播放'}
            </button>
            <button id="seek-end" className="text-white p-2 rounded hover:bg-gray-700">
              最右
            </button>
          </div>
          <span id="time-display" className="text-white">{formatTime(progress * 300)}</span>
        </div>
        <div
          id="progress-bar"
          className="h-2 bg-gray-700 rounded cursor-pointer relative"
          onClick={handleSeek}
        >
          {mockTranscript.map((sentence, index) => {
            const startTime = timestampToSeconds(sentence.timestamp);
            const endTime = index < mockTranscript.length - 1 
              ? timestampToSeconds(mockTranscript[index + 1].timestamp)
              : duration;
            const width = ((endTime - startTime) / duration) * 100;
            const left = (startTime / duration) * 100;

            return (
              <div
                key={sentence.id}
                id={`transcript-section-${sentence.id}`}
                className="absolute h-full bg-gray-500"
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                }}
              />
            );
          })}
          {highlightRanges.map((range, index) => {
            const width = ((range.end - range.start) / duration) * 100;
            const left = (range.start / duration) * 100;
            return (
              <div
                key={index}
                id={`highlight-section-${index}`}
                className="absolute h-full bg-blue-500"
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                  zIndex: 1,
                }}
              />
            );
          })}
          <div
            id="progress-indicator"
            className="absolute h-full w-0.5 bg-red-500"
            style={{ left: `${progress * 100}%`, zIndex: 2 }}
          />
        </div>
      </div>
    </section>
  )
}

export default PreviewArea
