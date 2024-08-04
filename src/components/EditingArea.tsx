import React from 'react';
import { Transcript, TranscriptItem, Sentence } from '../types/transcript';

interface EditingAreaProps {
  transcript: Transcript;
  onTranscriptChange: (newTranscript: Transcript) => void;
  progress: number;
  duration: number;
}

const EditingArea: React.FC<EditingAreaProps> = ({ transcript, onTranscriptChange, progress, duration }) => {
  const handleHighlightToggle = (id: number) => {
    const newTranscript = transcript.map(item => 
      item.type === 'sentence' && item.id === id ? { ...item, isHighlight: !item.isHighlight } : item
    );
    onTranscriptChange(newTranscript);
  };

  const getCurrentSentenceId = () => {
    const currentTime = progress * duration;
    const sentences = transcript.filter((item): item is Sentence => item.type === 'sentence');
    
    for (let i = 0; i < sentences.length; i++) {
      const currentTimestamp = timestampToSeconds(sentences[i].timestamp);
      const nextTimestamp = i < sentences.length - 1 
        ? timestampToSeconds(sentences[i + 1].timestamp) 
        : duration;
      
      if (currentTime >= currentTimestamp && currentTime < nextTimestamp) {
        return sentences[i].id;
      }
    }
    return null;
  };

  const timestampToSeconds = (timestamp: string): number => {
    const [minutes, seconds] = timestamp.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  const currentSentenceId = getCurrentSentenceId();

  const renderTranscriptItem = (item: TranscriptItem) => {
    if (item.type === 'heading') {
      return (
        <h3 key={item.id} className="text-xl font-bold mt-4 mb-2">{item.text}</h3>
      );
    } else {
      return (
        <div 
          key={item.id}
          className={`flex items-center mb-2 p-2 rounded cursor-pointer ${
            item.isHighlight ? 'bg-blue-100' : 'bg-white'
          } ${
            item.id === currentSentenceId ? 'border-2 border-red-500' : ''
          }`}
          onClick={() => handleHighlightToggle(item.id)}
        >
          <span className="w-12 text-sm text-gray-500">{item.timestamp}</span>
          <p className="flex-grow p-2 rounded bg-transparent">{item.text}</p>
        </div>
      );
    }
  };

  return (
    <section id="Editing" className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transcript</h2>
      {transcript.map(renderTranscriptItem)}
    </section>
  );
};

export default EditingArea;
