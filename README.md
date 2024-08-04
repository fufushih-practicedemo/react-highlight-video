# Highlight Video

Highlight Video is a powerful React-based web application designed for interactive video transcript editing and playback. This tool allows users to seamlessly view videos, edit transcripts, and highlight key moments, making it ideal for content creators, researchers, and anyone working with video content.

## Features

- **Synchronized Video Playback**: Watch videos with a custom-built player that synchronizes perfectly with the transcript.
- **Interactive Transcript Editing**: Edit and highlight specific sentences in the transcript in real-time.
- **Highlight Play Mode**: Focus on and play only the highlighted sections of the video.
- **Custom Video Controls**: Intuitive video controls including play/pause, seek, and progress tracking.
- **Responsive Design**: Seamlessly adapts to various screen sizes for a consistent user experience across devices.
- **Visual Progress Indicator**: Clear visual representation of video progress and highlighted sections.

## Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Video Playback**: React Player
- **Icons**: Lucide React
- **Data Validation**: Zod
- **Development Tools**: ESLint, PostCSS, Autoprefixer

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- pnpm package manager

### Installation

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start the development server: `pnpm run dev`
4. Open your browser and visit `http://localhost:5173`

### How to use

#### Uploading a Video

When you first open the application, you'll see the upload interface.
There are two ways to add a video:

Upload a local file
Provide a video URL

#### Using the Main Interface

Once your video is successfully uploaded or processed, you'll enter the main interface, which is divided into two main sections:

###### Preview Area (Right Side)

- You can watch the video here.
- Use the playback controls to play/pause the video.
- Use the progress bar to fast forward or rewind.
- Toggle "Highlight Mode" to play only the highlighted parts.

###### Editing Area (Left Side)

- You can view and edit the video's transcript here.
- Click the star icon next to each sentence to highlight or unhighlight it.
- Click on any sentence to jump the video to the time when that sentence starts.
