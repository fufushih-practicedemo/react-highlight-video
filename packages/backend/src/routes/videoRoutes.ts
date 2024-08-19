import express, { Router } from 'express';
import { PrismaClient } from "../../generated/client";

const router: Router = express.Router();
const prisma = new PrismaClient();

// Get all videos
router.get('/', async (req, res) => {
  try {
    const videos = await prisma.video.findMany();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching videos' });
  }
});

// Get a single video
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const video = await prisma.video.findUnique({
      where: { id: Number(id) },
      include: { transcripts: true },
    });
    if (video) {
      res.json(video);
    } else {
      res.status(404).json({ error: 'Video not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching video' });
  }
});

// Create a new video
router.post('/', async (req, res) => {
  try {
    const { title, url } = req.body;
    const video = await prisma.video.create({
      data: { title, url },
    });
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: 'Error creating video' });
  }
});

// Update a video
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, url } = req.body;
    const video = await prisma.video.update({
      where: { id: Number(id) },
      data: { title, url },
    });
    res.json(video);
  } catch (error) {
    res.status(500).json({ error: 'Error updating video' });
  }
});

// Delete a video
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.video.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting video' });
  }
});

export default router;
