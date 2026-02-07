const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
    });
});

app.get('/test', (req, res) => {
    res.send('Express test server is running 🚀');
});

app.get('/error', (req, res) => {
    res.status(500).json({ error: 'Intentional test error' });
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
