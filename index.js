// server.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // ✅ this is crucial!

const app = express();

app.use(cors());
app.use(express.json());

app.post('/fetch-url', async (req, res) => {
  const { url } = req.body;

  try {
    const response = await fetch(url);
    const data = await response.json(); // use response.json() if API returns JSON
    res.json({ content: data });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching URL', error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
