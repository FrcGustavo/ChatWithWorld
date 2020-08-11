import React from 'react';

import Navbar from '../../organisms/Navbar';
import ChatButton from '../../molecules/ChatButton';

import Search from '../../atoms/InputSearch';

import { Container, Chats, Messages } from './styles';

const Chat = () => (
  <Container>
    <Navbar />
    <Chats>
      <Search />
      <ChatButton
        name="Francisco Gustavo"
        message="Hello friend in hard code"
        badge="16"
      />
      <ChatButton
        name="Francisco Gustavo"
        message="Hello friend in hard code"
        badge="1"
        active
      />
    </Chats>
    <Messages>
      <div>
        HOLA
      </div>
      <input type="text" placeholder="HOLA" />
    </Messages>
  </Container>
);

export default Chat;