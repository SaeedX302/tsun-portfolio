import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import axios from 'axios';

// Set up the filename and dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

// Serve the index.html file
app.use(express.static(path.join(__dirname, 'src')));

app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'terms.html'));
});

app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

app.get('/data-deletion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'data-deletion.html'));
});

// Handle the sending of messages
app.post('/send-message', async (req, res) => {
    const { text } = req.body;
    const botToken = process.env.BOT_TOKEN;
    const chatId = process.env.CHAT_ID;

    try {
        const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: chatId,
            text: text,
        });

        if (response.data.ok) {
            res.json({ ok: true });
        } else {
            res.status(500).json({ ok: false, error: 'Failed to send message.' });
        }
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ ok: false, error: 'An error occurred while sending the message.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log('Server is Live on Port ' + PORT);
});

const RESTART_INTERVAL = 20 * 60 * 1000; // 20 minutes in milliseconds

setTimeout(() => {
    console.log("Restarting Gifted-Portfolio after 20 minutes...");
    process.exit(0); // Exits the process, which will trigger a restart on most platforms
}, RESTART_INTERVAL);
