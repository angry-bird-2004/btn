const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/message', (req, res) => {
    res.json({ text: "Hello from the Express server!" });
});

app.listen(5000, () => console.log('Server running on port 5000'));