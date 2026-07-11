import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Load Spices Data
const getSpicesData = () => {
  const filePath = path.join(__dirname, 'data', 'spices.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileData);
};

// GET spices list
app.get('/api/spices', (req, res) => {
  try {
    const spices = getSpicesData();
    res.json(spices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read spices data' });
  }
});

// POST contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message, phone } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const contactFilePath = path.join(__dirname, 'data', 'contact.json');
    const existingData = fs.readFileSync(contactFilePath, 'utf-8');
    const submissions = JSON.parse(existingData || '[]');

    const newSubmission = {
      id: Date.now().toString(),
      name: name || 'Anonymous',
      email,
      phone: phone || '',
      message: message || '',
      submittedAt: new Date().toISOString()
    };

    submissions.push(newSubmission);
    fs.writeFileSync(contactFilePath, JSON.stringify(submissions, null, 2), 'utf-8');

    res.status(201).json({ success: true, message: 'Message received successfully!', submission: newSubmission });
  } catch (error) {
    console.error('Error saving contact info:', error);
    res.status(500).json({ error: 'Failed to save contact submission' });
  }
});

app.listen(PORT, () => {
  console.log(`Spice Shop Backend listening on port ${PORT}`);
});
