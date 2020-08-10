import React from 'react';
import { FaRegSun, FaToggleOff, FaSignal, FaSearch } from 'react-icons/fa';
import Menu from '../../organisms/Menu';

import image from '../../../image.png'

import { Container, Navbar, Chats, Messages, Profile, NavButton, Feet, Badge, ChatButton, Search } from './styles';

const Chat = () => (
  <Container>
    <Navbar>
      <Profile>
        <img src="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg" alt=""/>
        <h1>
          <span>Francisco Gustavo</span>
          <span />
        </h1>
      </Profile>
      <Menu />
      <div>
        <NavButton>
          <div>
            <FaRegSun />
            <span>Settings</span>
          </div>
        </NavButton>
        <NavButton>
          <div>
            <span>Dark Mode</span>
          </div>
          <FaToggleOff />
        </NavButton>
      </div>
      <footer>
        <NavButton>
          <div>
            <span>Connection</span>
          </div>
          <FaSignal />
        </NavButton>
        <Feet>
          <span>Desktop</span>
          <span>Version 1.0</span>
        </Feet>
      </footer>
    </Navbar>
    <Chats>
      <Search>
        <div>
          <label htmlFor="">
            <FaSearch />
          </label>
          <input type="text" placeholder="Search"/>
        </div>
      </Search>
      <ChatButton>
        <div>
          <img src="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg" alt=""/>
          <div>
            <h3>Aston Martin</h3>
            <p>I am fine too</p>
          </div>
        </div>
        <Badge>
          <span>2</span>
        </Badge>
      </ChatButton>
      <ChatButton active>
        <div>
          <img src="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg" alt=""/>
          <div>
            <h3>Aston Martin <span/></h3>
            <p>I am fine too</p>
          </div>
        </div>
      </ChatButton>
    </Chats>
    <Messages>
      <img src={image} alt="" style={{ width: '100%' }}/>
      <h1>Messages</h1>
    </Messages>
  </Container>
);

export default Chat;