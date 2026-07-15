const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'https://btn-five.vercel.app',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/api/message', (req, res) => {
  res.json({
    text: 'Hello from the Express server!'
  });
});

module.exports = app;