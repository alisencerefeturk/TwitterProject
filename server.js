require('dotenv').config();
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/health', (req, res) => {
  res.send('Sunucu ayakta ✅');
});

// Sabit username
const FIXED_USERNAME = 'sports1hds';

app.get('/user', async (req, res) => {
  const url = `https://api.x.com/2/users/by/username/${FIXED_USERNAME}`;

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.BEARER_KEY}`
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'X API çağrısı başarısız' });
  }
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
