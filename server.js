
const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.get('/', (req, res) => res.send("welcome"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log('Server Running'))
