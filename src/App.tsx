import { useEffect, useState } from "react";
import EditingArea from "./components/EditingArea"
import PreviewArea from "./components/PreviewArea"
import { fetchTranscriptData } from "./services/apiService"
import { TranscriptData } from "./types/transcript";

function App() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [transcriptData, setTranscriptData] = useState<TranscriptData | null>(null);
  const [seekTime, setSeekTime] = useState<number | null>(null);

  useEffect(() => {
    const loadTranscriptData = async () => {
      try {
        const data = await fetchTranscriptData();
        setTranscriptData(data);
      } catch (error) {
        console.error("Failed to load transcript data:", error);
      }
    };

    loadTranscriptData();
  }, []);

  const handlePlayPause = () => {
    setPlaying(!playing);
  }

  const handleProgress = (state: { played: number }) => {
    setProgress(state.played)
  }

  const handleDuration = (duration: number) => {
    setDuration(duration);
  }

  const handleTranscriptUpdate = (newTranscript: TranscriptData['transcript']) => {
    if (transcriptData) {
      setTranscriptData({ ...transcriptData, transcript: newTranscript });
    }
  }

  const handleSeek = (time: number) => {
    setSeekTime(time);
  };

  if (!transcriptData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-gray-200 order-2 md:order-1">
        <EditingArea 
          transcript={transcriptData.transcript} 
          onTranscriptChange={handleTranscriptUpdate}
          progress={progress}
          duration={duration}
          onSeek={handleSeek}
        />
      </div>
      <div className="w-full md:w-1/2 bg-red-200 order-1 md:order-2">
        <PreviewArea
          videoUrl={transcriptData.videoUrl}
          playing={playing}
          progress={progress}
          transcript={transcriptData.transcript}
          handlePlayPause={handlePlayPause}
          handleProgress={handleProgress}
          handleDuration={handleDuration}
          seekTime={seekTime}
        />
      </div>
    </div>
  )
}

export default App
