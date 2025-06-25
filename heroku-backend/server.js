// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// import your API routes
const apiRouter = require('./controllers');

// ─── Enable CORS ───────────────────────────────────────────────────────────────
// During development you can set origin to your local frontend URL.
// In production, change this to your real domain or use an array of allowed origins.
app.use(cors({
  origin: [
    'http://localhost:63342',
    'https://www.thgc.com'
  ],
  methods: ['GET','POST','OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// ─── Body parsers ──────────────────────────────────────────────────────────────
app.use(express.json());                        // for JSON payloads
app.use(express.urlencoded({ extended: true })); // for form submissions

// ─── Mount your API routes under /api ─────────────────────────────────────────
app.use('/api', apiRouter);

// ─── A simple root route to verify the app is up ───────────────────────────────
app.get('/', (req, res) => {
  res.send('🚀 tghc-api is running');
});

// ─── Start the server ───────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 tghc-api listening on port ${PORT}`);
});
