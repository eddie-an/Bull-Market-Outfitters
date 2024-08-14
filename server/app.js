// server/app.js
require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const emailRouter = require('./routes/emailRouter');
app.use(bodyParser.json());
app.use(
    cors({
        origin: process.env.CLIENT_URL
    })
)


app.use('/api', emailRouter); // Use the email router

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
