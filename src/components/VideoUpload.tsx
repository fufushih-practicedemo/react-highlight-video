import { useState } from 'react';
import { uploadVideo } from '../services/apiService';
import { TranscriptData } from '../types/transcript';
import { Loader } from 'lucide-react';

interface VideoUploadProps {
  onVideoUploaded: (data: TranscriptData) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoUploaded }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        const data = await uploadVideo(file, null);
        onVideoUploaded(data);
      } catch (error) {
        console.error('Error uploading video:', error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleUrlSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = (event.target as HTMLFormElement).url.value;
    if (url) {
      setIsUploading(true);
      try {
        const data = await uploadVideo(null, url);
        onVideoUploaded(data);
      } catch (error) {
        console.error('Error processing video URL:', error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div className="p-4 bg-gray-800 h-screen flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-white">Upload Video</h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileUpload}
        className="mb-4 text-white"
      />
      <form onSubmit={handleUrlSubmit} className="flex flex-col">
        <input
          type="url"
          name="url"
          placeholder="Enter video URL"
          className="mr-2 p-2 border rounded mb-2"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Process URL
        </button>
      </form>
      {isUploading && (
        <div className="mt-4 flex items-center">
          <Loader className="animate-spin mr-2 text-white" size={24} />
          <p className="text-white">Uploading...</p>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
