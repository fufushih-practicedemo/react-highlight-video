import { useEffect, useState } from "react";
import EditingArea from "./components/EditingArea"
import PreviewArea from "./components/PreviewArea"
import { Transcript } from "./types/transcript";

function App() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [transcript, setTranscript] = useState<Transcript>([]);

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
      setTranscript(adjustedTranscript);
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

  const formatTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, '0');
    return `${mm}:${ss}`;
  };


  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-blue-200 order-2 md:order-1">
        <EditingArea />
      </div>
      <div className="w-full md:w-1/2 bg-red-200 order-1 md:order-2">
        <PreviewArea
          playing={playing}
          progress={progress}
          duration={duration}
          transcript={transcript}
          handlePlayPause={handlePlayPause}
          handleProgress={handleProgress}
          handleDuration={handleDuration}
        />
      </div>
    </div>
  )
}

export default App
