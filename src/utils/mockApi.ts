import { TranscriptData } from '../types/transcript';

const mockTranscriptData: TranscriptData = {
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  transcript: [
    { id: 1, text: "We're no strangers to love", timestamp: "00:18" },
    { id: 2, text: "You know the rules and so do I", timestamp: "00:22", isHighlight: true },
    { id: 3, text: "A full commitment's what I'm thinking of", timestamp: "00:26" },
    { id: 4, text: "You wouldn't get this from any other guy", timestamp: "00:30" },
    { id: 5, text: "I just wanna tell you how I'm feeling", timestamp: "00:34", isHighlight: true },
    { id: 6, text: "Gotta make you understand", timestamp: "00:38" },
  ]
};

export const getMockTranscriptData = (): Promise<TranscriptData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTranscriptData);
    }, 500);
  });
};
