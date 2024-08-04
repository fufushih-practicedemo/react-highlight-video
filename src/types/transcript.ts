import { z } from 'zod';

export const HeadingSchema = z.object({
  id: z.number(),
  text: z.string(),
  type: z.literal('heading'),
});

export const SentenceSchema = z.object({
  id: z.number(),
  text: z.string(),
  timestamp: z.string(),
  isHighlight: z.boolean().optional(),
  type: z.literal('sentence'),
});

export const TranscriptItemSchema = z.union([HeadingSchema, SentenceSchema]);

export const TranscriptSchema = z.array(TranscriptItemSchema);

export const TranscriptDataSchema = z.object({
  videoUrl: z.string(),
  transcript: TranscriptSchema,
});

export type Heading = z.infer<typeof HeadingSchema>;
export type Sentence = z.infer<typeof SentenceSchema>;
export type TranscriptItem = z.infer<typeof TranscriptItemSchema>;
export type Transcript = z.infer<typeof TranscriptSchema>;
export type TranscriptData = z.infer<typeof TranscriptDataSchema>;
