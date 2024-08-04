import React from 'react';
import { Transcript } from '../types/transcript';

interface EditingAreaProps {
  transcript: Transcript;
  setTranscript: React.Dispatch<React.SetStateAction<Transcript>>;
  progress: number;
  duration: number;
}

const EditingArea: React.FC<EditingAreaProps> = ({ transcript, setTranscript, progress, duration }) => {
  const handleHighlightToggle = (id: number) => {
    setTranscript(prevTranscript => 
      prevTranscript.map(sentence => 
        sentence.id === id ? { ...sentence, isHighlight: !sentence.isHighlight } : sentence
      )
    );
  };

  const getCurrentSentenceId = () => {
    const currentTime = progress * duration;
    for (let i = 0; i < transcript.length; i++) {
      const currentTimestamp = timestampToSeconds(transcript[i].timestamp);
      const nextTimestamp = i < transcript.length - 1 
        ? timestampToSeconds(transcript[i + 1].timestamp) 
        : duration;
      if (currentTime >= currentTimestamp && currentTime < nextTimestamp) {
        return transcript[i].id;
      }
    }
    return null;
  };

  const timestampToSeconds = (timestamp: string): number => {
    const [minutes, seconds] = timestamp.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  const currentSentenceId = getCurrentSentenceId();

  return (
    <section id="Editing" className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transcript</h2>
      {transcript.map((sentence) => (
        <div 
          key={sentence.id}
          className={`flex items-center mb-2 p-2 rounded cursor-pointer ${
            sentence.isHighlight ? 'bg-blue-100' : 'bg-white'
          } ${
            sentence.id === currentSentenceId ? 'border-2 border-red-500' : ''
          }`}
          onClick={() => handleHighlightToggle(sentence.id)}
        >
          <span className="w-12 text-sm text-gray-500">{sentence.timestamp}</span>
          <p className="flex-grow p-2 rounded bg-transparent">{sentence.text}</p>
        </div>
      ))}
    </section>
  );
};

export default EditingArea;
