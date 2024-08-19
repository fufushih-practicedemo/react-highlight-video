import express, { Router } from 'express';
import { PrismaClient } from "../../generated/client";

const router: Router = express.Router();
const prisma = new PrismaClient();

// Get transcript for a video
router.get('/video/:videoId', async (req, res) => {
  try {
    const { videoId } = req.params;
    const transcript = await prisma.transcript.findUnique({
      where: { videoId: Number(videoId) },
      include: { sentences: true },
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

// Add sentences to a transcript
router.post('/:id/sentences', async (req, res) => {
  try {
    const { id } = req.params;
    const { sentences } = req.body;
    const updatedTranscript = await prisma.transcript.update({
      where: { id: Number(id) },
      data: {
        sentences: {
          create: sentences,
        },
      },
      include: { sentences: true },
    });
    res.status(201).json(updatedTranscript);
  } catch (error) {
    res.status(500).json({ error: 'Error adding sentences to transcript' });
  }
});

// Update a sentence
router.put('/sentences/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { content, startTime, endTime, isHighlight } = req.body;
    const sentence = await prisma.sentence.update({
      where: { id: Number(id) },
      data: { content, startTime, endTime, isHighlight },
    });
    res.json(sentence);
  } catch (error) {
    res.status(500).json({ error: 'Error updating sentence' });
  }
});

// Delete a sentence
router.delete('/sentences/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.sentence.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting sentence' });
  }
});

export default router;
