const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./db');
const taskRouter = require('./routes');

const app = express();
const apiPort = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`Hello World`);
});

db.on('error', console.error.bind(console, 'Mongodb connection error!'));

app.use('/tasks', taskRouter);


app.listen(apiPort, () => {
    console.log(`Server running on port ${apiPort}`);
});