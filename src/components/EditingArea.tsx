import React from 'react';
import { Transcript } from '../types/transcript';

interface EditingAreaProps {
  transcript: Transcript;
  setTranscript: React.Dispatch<React.SetStateAction<Transcript>>;
}

const EditingArea: React.FC<EditingAreaProps> = ({ transcript, setTranscript }) => {
  const handleHighlightToggle = (id: number) => {
    setTranscript(prevTranscript => 
      prevTranscript.map(sentence => 
        sentence.id === id ? { ...sentence, isHighlight: !sentence.isHighlight } : sentence
      )
    );
  };

  return (
    <section id="Editing" className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transcript</h2>
      {transcript.map(sentence => (
        <div 
          key={sentence.id} 
          className={`flex items-center mb-2 p-2 rounded cursor-pointer ${
            sentence.isHighlight ? 'bg-blue-100' : 'bg-white'
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
