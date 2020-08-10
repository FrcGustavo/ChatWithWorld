import React from 'react';
import { FaSearch } from 'react-icons/fa';

import Navbar from '../../organisms/Navbar';
import ChatButton from '../../molecules/ChatButton';
import image from '../../../image.png'

import { Container, Chats, Messages, Search } from './styles';


const Chat = () => (
  <Container>
    <Navbar />
    <Chats>
      <Search>
        <div>
          <label htmlFor="">
            <FaSearch />
          </label>
          <input type="text" placeholder="Search"/>
        </div>
      </Search>
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
      <img src={image} alt="" style={{ width: '100%' }}/>
      <h1>Messages</h1>
    </Messages>
  </Container>
);

export default Chat;