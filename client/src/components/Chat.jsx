import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    useEffect(() => { 
        const query = window.location.search.split(/[&?=]/);
        const name = query[2];
        const room = query[4];
        
        socket = io('http://localhost:5000');

        setName(name);
        setRoom(room);
        
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                console.log('MI ERROR', error);
            }
        });
    }, [window.location.search]);

    return (
        <h1>Nombre: {name} Sala: {room}</h1>
    );
};

export default Chat;
