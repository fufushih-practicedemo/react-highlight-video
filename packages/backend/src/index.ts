import express from 'express';
import videoRoutes from './routes/videoRoutes';
import transcriptRoutes from './routes/transcriptRoutes';

const app = express();

app.use(express.json());

app.use('/api/videos', videoRoutes);
app.use('/api/transcripts', transcriptRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
