const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/message', (req, res) => {
    res.json({ text: "Hello from the Express server!" });
});

// REMOVE: app.listen(5000, ...);

// ADD: Export the app for Vercel
module.exports = app;