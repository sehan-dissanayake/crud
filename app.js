const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/crudjs';

const app = express();

mongoose.connect(url)
const db = mongoose.connection;

db.on('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

app.listen(9000, () => {
    console.log('Server is running on port 9000');
})


