import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Chat = ({ history }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const socket = io('http://localhost:5000');

    useEffect(() => { 
        const query = history.location.search.split(/[&?=]/);
        
        setName(query[2]);
        setRoom(query[4]);

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                console.log('MI ERROR', error);
            }
        });


    }, [history.location.search]);

    return (
    <h1>Nombre: {name} Sala: {room}</h1>
    );
};

export default Chat;
