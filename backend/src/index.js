const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const localUrl = 'mongodb://127.0.0.1:27017/admin';

mongoose.connect(localUrl, {
    useNewUrlParser: true,
}).then(() => {
    return console.log('Connected to DB.')
}).catch((err) => {
   return console.log('Erro', err)
});

app.use((req, res, next) => {
    req.io = io;

    next();
})

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))
app.use(require('./routes'));

server.listen(3333);



