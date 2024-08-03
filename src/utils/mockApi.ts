import { Transcript } from '../types/transcript';

const mockTranscript: Transcript = [
  { id: 1, text: "歡迎來到我們的產品展示。", timestamp: "00:00" },
  { id: 2, text: "今天，我們將展示我們最新的創新。", timestamp: "00:05", isHighlight: true },
  { id: 3, text: "我們的產品有三個主要特點。", timestamp: "00:15" },
];

export const getMockTranscript = (): Promise<Transcript> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTranscript);
    }, 500);
  });
};
