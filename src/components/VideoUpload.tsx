import { useState } from 'react';
import { Upload, Link } from 'lucide-react';

interface VideoUploadProps {
  onVideoSelect: (file: File | null, url: string | null) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoSelect }) => {
  const [dragActive, setDragActive] = useState(false);
  const [url, setUrl] = useState('');

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onVideoSelect(e.dataTransfer.files[0], null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onVideoSelect(e.target.files[0], null);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (url.trim()) {
      onVideoSelect(null, url.trim());
      setUrl('');
    }
  };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-4 text-center ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="video-upload"
          className="hidden"
          accept="video/*"
          onChange={handleChange}
        />
        <label htmlFor="video-upload" className="cursor-pointer">
          <Upload className="mx-auto mb-2" size={48} />
          <p>Drag and drop a video file here, or click to select a file</p>
        </label>
      </div>
      <div className="text-center">
        <p className="mb-2">Or enter a video URL:</p>
        <form onSubmit={handleUrlSubmit} className="flex">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter video URL"
            className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Link size={24} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoUpload
