import express, { Router } from 'express';
import { PrismaClient } from "../../generated/client";
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router: Router = express.Router();
const prisma = new PrismaClient();

// Ensure uploads directory exists
const uploadPath = path.join(__dirname, '..', '..', 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
  console.log(`Created uploads directory at ${uploadPath}`);
}

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(`Attempting to save file to: ${uploadPath}`);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueFilename = Date.now() + path.extname(file.originalname);
    console.log(`Generated filename: ${uniqueFilename}`);
    cb(null, uniqueFilename);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log(`Received file: ${file.originalname}, mimetype: ${file.mimetype}`);
    cb(null, true);
  }
});

// Get all videos
router.get('/', async (req, res) => {
  try {
    const videos = await prisma.video.findMany({
      include: { transcript: true },
    });
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
      include: { 
        transcript: {
          include: { sentences: true }
        }
      },
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
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const { title, url } = req.body;
    const videoUrl = req.file ? `/uploads/${req.file.filename}` : url;

    if (!videoUrl) {
      return res.status(400).json({ error: 'Either url or file must be provided' });
    }

    const video = await prisma.video.create({
      data: { 
        title, 
        url: videoUrl,
        transcript: {
          create: {} // Create an empty transcript
        }
      },
      include: { transcript: true },
    });
    res.status(201).json(video);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error creating video' });
  }
});

// Update a video
router.put('/:id', upload.single('file'), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, url } = req.body;
    const videoUrl = req.file ? `/uploads/${req.file.filename}` : url;

    const video = await prisma.video.update({
      where: { id: Number(id) },
      data: { 
        title, 
        url: videoUrl 
      },
      include: { transcript: true },
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
