
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json({content: data });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching URL', error: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
