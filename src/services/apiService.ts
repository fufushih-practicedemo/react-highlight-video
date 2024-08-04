import { TranscriptDataSchema, TranscriptData } from '../types/transcript';
import { getMockTranscriptData } from '../utils/mockApi';

export const fetchTranscriptData = async (): Promise<TranscriptData> => {
  try {
    // TODO: use real api
    // const response = await fetch('API_URL');
    // const data = await response.json();
    const data = await getMockTranscriptData();
    
    const validatedData = TranscriptDataSchema.parse(data);
    return validatedData;
  } catch (error) {
    console.error('Error fetching transcript data: ', error);
    throw error;
  }
};
