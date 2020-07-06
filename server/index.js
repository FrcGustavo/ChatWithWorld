const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.get('/', (req, res) => {
    res.send('Hello this proyect you can see in http://localhost:3000');
});

io.on('connect', (socket) => {
    console.log('Conectado');
    socket.on('join', ({ name, room }, callback) => {
        console.log('DATA', name, room);
        callback()
    });

    socket.on('disconnect', () => {
        console.log('BYE');
    });
});

server.listen(process.env.PORT || 5000, () => console.log('server is running'));