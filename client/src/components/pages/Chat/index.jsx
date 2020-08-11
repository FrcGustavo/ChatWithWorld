import React from 'react';

import Navbar from '../../organisms/Navbar';
import ChatButton from '../../molecules/ChatButton';
import Messages from '../../organisms/Messages';

import Search from '../../atoms/InputSearch';

import { Container, Chats } from './styles';

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
    <Messages />
  </Container>
);

export default Chat;