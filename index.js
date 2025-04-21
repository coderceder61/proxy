const express = require('express')
const app = express()

const fetch = require('node-fetch')

const cors = require('cors')

app.use(cors())
app.use(express.json());

app.post('/fetch-url',async (req, res) => {
    const { url } = req.body;
    try {
        const response = await fetch(url);
        const data = await response.json(); // use response.json() if API returns JSON
        res.json({ message: 'Data fetched successfully', content: data });
      } catch (err) {
        res.status(500).json({ message: 'Error fetching URL', error: err.message });
      }
  });
app.listen(3000,()=>{
    console.log('listening on port 3000')
})