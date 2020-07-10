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

        setName(name.trim().toLocaleLowerCase());
        setRoom(room);
        
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                console.log('MI ERROR', error);
            }
        });
    }, []);

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
        <div className="chat-room">
            <div className="container">
                <div className="chat">
                    <h2>Sala: {room}</h2>
                    <div className="messages">
                        {
                            messages.map(m => <p key={m.text} className={m.user === name ? 'message message-me' : 'message' }>{m.text}</p>)
                        }
                    </div>
                    <div className="chat-input">
                        <input type="text" onChange={handleChange} value={message} placeholder="Escribe un mensaje"/>
                        <input type="button" value="Enviar" onClick={sendMessage} />
                    </div>
                </div>
                <div className="people">
                    <h2>Activos</h2>
                    {
                        users === '' ? null : users.map(m => <p key={m.name}>{m.name}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chat;
