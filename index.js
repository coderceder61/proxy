import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/fetch-url', async (req, res) => {
  const { url } = req.body;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json({content: data });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching URL', error: err.message });
  }
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
