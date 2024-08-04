// components/VideoUpload.tsx

import React from 'react';
import { uploadVideo } from '../services/apiService';
import { TranscriptData } from '../types/transcript';

interface VideoUploadProps {
  onVideoUploaded: (data: TranscriptData) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoUploaded }) => {
  const [isUploading, setIsUploading] = React.useState(false);

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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Upload Video</h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileUpload}
        className="mb-4 text-white"
      />
      <form onSubmit={handleUrlSubmit}>
        <input
          type="url"
          name="url"
          placeholder="Enter video URL"
          className="mr-2 p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Process URL
        </button>
      </form>
      {isUploading && <p className="mt-4">Uploading...</p>}
    </div>
  );
};

export default VideoUpload;
