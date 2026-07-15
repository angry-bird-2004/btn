const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = process.env.NODE_ENV === 'production'
  ? {
      origin: 'https://btn-five.vercel.app',
      optionsSuccessStatus: 200,
    }
  : {
      // In development allow requests from local dev servers
      origin: true,
      optionsSuccessStatus: 200,
    };

app.use(cors(corsOptions));

app.get('/api/message', (req, res) => {
  res.json({
    text: 'Hello from the Express server!'
  });
});

module.exports = app;