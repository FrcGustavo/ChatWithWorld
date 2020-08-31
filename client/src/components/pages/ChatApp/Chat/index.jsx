import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import io from 'socket.io-client';

import { UserContext } from '../../../../store';
import Chats from '../../../organisms/Chats';
import Messages from '../../../organisms/Messages';
import NotMessages from '../../../molecules/NotMessages';

import { Container } from './styles';

let socket;

const Chat = () => {
  const [ users, setUsers ] = useState([]);
  const { state } = useContext(UserContext);

  useEffect(() => { 
    socket = io('http://localhost:5000');
   
    socket.emit('join', { name: state.user.name, room: state.user.room }, (error) => {
        if (error) {
            console.log('MI ERROR', error);
        }
    });
}, [state]);

useEffect(() => {
    socket.on('message', (message) => {
        //setMessages((messages) => [ ...messages, message ]);
        console.log(message);
    });

    socket.on('roomData', ({ room, users }) => {
        console.log(room, users);
        setUsers(users);
    });
}, []);
  return (
    <Router>
      <Chats users={users} />
      <Container>
        <Route exact path="/app/chat" component={NotMessages} />
        <Route exact path="/app/chat/:id" component={Messages} />
      </Container>
    </Router>
  );
};

export default Chat;