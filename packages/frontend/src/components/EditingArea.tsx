import React, { useRef, useEffect } from 'react';
import { Transcript, TranscriptItem, Sentence } from '../types/transcript';
import { Star } from 'lucide-react';

interface EditingAreaProps {
  transcript: Transcript;
  onTranscriptChange: (newTranscript: Transcript) => void;
  progress: number;
  duration: number;
  onSeek: (time: number) => void;
}

const EditingArea: React.FC<EditingAreaProps> = ({ 
  transcript, 
  onTranscriptChange, 
  progress, 
  duration,
  onSeek 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const currentSentenceRef = useRef<HTMLDivElement>(null);

  const handleHighlightToggle = (id: number) => {
    const newTranscript = transcript.map(item => 
      item.type === 'sentence' && item.id === id ? { ...item, isHighlight: !item.isHighlight } : item
    );
    onTranscriptChange(newTranscript);
  };

  const handleSentenceClick = (timestamp: string) => {
    const seconds = timestampToSeconds(timestamp);
    onSeek(seconds);
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

  useEffect(() => {
    if (currentSentenceRef.current && scrollContainerRef.current) {
      currentSentenceRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [currentSentenceId]);

  const renderTranscriptItem = (item: TranscriptItem) => {
    if (item.type === 'heading') {
      return <h3 key={item.id} className="text-xl font-bold mt-6 mb-3">{item.text}</h3>;
    }
  
    return (
      <div 
        key={item.id}
        ref={item.id === currentSentenceId ? currentSentenceRef : null}
        className="
          flex items-stretch mb-2 gap-2
          min-h-[60px] transition-all duration-200 ease-in-out
        "
      >
        <div 
          className={`
            flex items-center flex-grow cursor-pointer p-2 rounded
            ${item.isHighlight ? 'bg-blue-100' : 'bg-white'}
            ${item.id === currentSentenceId ? 'ring-4 ring-red-400' : ''}
          `}
          onClick={() => handleSentenceClick(item.timestamp)}
        >
          <span className="w-16 text-sm text-gray-500 flex-shrink-0">
            {item.timestamp}
          </span>
          <p className="flex-grow px-2">
            {item.text}
          </p>
        </div>
        <div className='flex items-center'>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleHighlightToggle(item.id);
            }}
            className={`
              p-1 rounded-full hover:bg-gray-200 transition-colors duration-200
              ${item.isHighlight ? 'text-yellow-500' : 'text-gray-400'}
            `}
          >
            <Star size={24} fill={item.isHighlight ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="Editing" className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4 px-4 pt-4">Transcript</h2>
      <div 
        ref={scrollContainerRef}
        className="flex-grow overflow-y-auto px-4 pb-4 no-scrollbar"
      >
        {transcript.map(renderTranscriptItem)}
      </div>
    </section>
  );
};

export default EditingArea;
