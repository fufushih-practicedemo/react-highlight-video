import express, { Router } from 'express';
import { PrismaClient } from "../../generated/client";

const router: Router = express.Router();
const prisma = new PrismaClient();

// Get all transcripts for a video
router.get('/video/:videoId', async (req, res) => {
  try {
    const { videoId } = req.params;
    const transcripts = await prisma.transcript.findMany({
      where: { videoId: Number(videoId) },
    });
    res.json(transcripts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching transcripts' });
  }
});

// Get a single transcript
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const transcript = await prisma.transcript.findUnique({
      where: { id: Number(id) },
    });
    if (transcript) {
      res.json(transcript);
    } else {
      res.status(404).json({ error: 'Transcript not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching transcript' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { content, startTime, endTime, videoId } = req.body;
    const transcript = await prisma.transcript.create({
      data: { content, startTime, endTime, videoId: Number(videoId) },
    });
    res.status(201).json(transcript);
  } catch (error) {
    res.status(500).json({ error: 'Error creating transcript' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { content, startTime, endTime } = req.body;
    const transcript = await prisma.transcript.update({
      where: { id: Number(id) },
      data: { content, startTime, endTime },
    });
    res.json(transcript);
  } catch (error) {
    res.status(500).json({ error: 'Error updating transcript' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.transcript.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting transcript' });
  }
});

export default router;
