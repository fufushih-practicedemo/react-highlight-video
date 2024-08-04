import { z } from 'zod';

export const SentenceSchema = z.object({
  id: z.number(),
  text: z.string(),
  timestamp: z.string(),
  isHighlight: z.boolean().optional(),
});

export const TranscriptSchema = z.array(SentenceSchema);
export const TranscriptDataSchema = z.object({
  videoUrl: z.string(),
  transcript: z.array(SentenceSchema),
});

export type Sentence = z.infer<typeof SentenceSchema>;
export type Transcript = z.infer<typeof TranscriptSchema>;
export type TranscriptData = z.infer<typeof TranscriptDataSchema>;
