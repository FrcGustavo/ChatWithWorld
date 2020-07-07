const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./user');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.get('/', (req, res) => {
    console.log('HELLO');
    
    res.send('Hello this proyect you can see in http://localhost:3000');
});

io.on('connect', (socket) => {
    console.log('Conectado');
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room })
        
        if (error) return callback(error);

        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback()
    });

    socket.on('disconnect', () => {
        removeUser(socket.id);
    });
});

server.listen(process.env.PORT || 5000, () => console.log(`server is running in localhost:5000`));