const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const cors = require('cors');

const corsOptions = {
  origin: 'https://btn-five.vercel.app', // Your deployed frontend URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/api/message', (req, res) => {
    res.json({ text: "Hello from the Express server!" });
});

// REMOVE: app.listen(5000, ...);

// ADD: Export the app for Vercel
module.exports = app;