import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

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

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((messages) => [ ...messages, message ]);
            console.log('NUEVO MENSAJE');
        });

        socket.on('roomData', ({ room, users }) => {
            console.log(room, users);
            setUsers(users);
        });
    }, []);

    const handleChange = (event) => {
        console.log(message);
        setMessage(event.target.value);
    };

    const sendMessage = (event) => {
            event.preventDefault();

            if (message) {
                socket.emit('sendMessage', message, () => setMessage(''));
                console.log('Enviando');
                
            }
    };

    return (
        <div>
            <h1>Nombre: {name} Sala: {room}</h1>
            {
                messages.map(m => <p key={m.text}>{m.text}</p>)
            }
            {
                users === '' ? null : users.map(m => <p key={m.name}>{m.name}</p>)
            }
            <input type="text" onChange={handleChange} value={message} />
            <input type="button" value="Enviar" onClick={sendMessage} />
        </div>
    );
};

export default Chat;
