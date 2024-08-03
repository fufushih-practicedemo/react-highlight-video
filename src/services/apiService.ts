import { TranscriptSchema, Transcript } from '../types/transcript';
import { getMockTranscript } from '../utils/mockApi';

export const fetchTranscript = async (): Promise<Transcript> => {
  try {
    // TODO: use real api
    // const response = await fetch('API_URL');
    // const data = await response.json();
    const data = await getMockTranscript();
    
    const validatedData = TranscriptSchema.parse(data);
    return validatedData;
  } catch (error) {
    console.error('Error fetching transcript:', error);
    throw error;
  }
};
