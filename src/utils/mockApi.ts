import { TranscriptData } from '../types/transcript';

const mockTranscriptData: TranscriptData = {
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  transcript: [
    { id: 0, text: "Introduction", type: "heading" },
    { id: 1, text: "", type: "sentence", timestamp: "00:00" },
    { id: 2, text: "We're no strangers to love", timestamp: "00:18", type: "sentence" },
    { id: 3, text: "You know the rules and so do I", timestamp: "00:22", isHighlight: true, type: "sentence" },
    { id: 4, text: "A full commitment's what I'm thinking of", timestamp: "00:26", type: "sentence" },
    { id: 5, text: "You wouldn't get this from any other guy", timestamp: "00:30", type: "sentence" },
    { id: 6, text: "Chorus", type: "heading" },
    { id: 7, text: "I just wanna tell you how I'm feeling", timestamp: "00:34", isHighlight: true, type: "sentence" },
    { id: 8, text: "Gotta make you understand", timestamp: "00:38", type: "sentence" },
  ]
};

export const getMockTranscriptData = (): Promise<TranscriptData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTranscriptData);
    }, 500);
  });
};
