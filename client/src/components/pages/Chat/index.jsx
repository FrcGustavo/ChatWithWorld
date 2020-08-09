import React from 'react';
import { FaPhoneAlt, FaUserAlt, FaFacebookMessenger, FaUsers, FaRegSun, FaToggleOff, FaSignal } from 'react-icons/fa';

import image from '../../../image.png'

import { Container, Navbar, Chats, Messages, Profile, Menu, NavButton, Feet, Badge } from './styles';

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
      <Menu>
        <NavButton>
          <div>
            <FaPhoneAlt />
            <span>Calls</span>
          </div>
          <Badge>
            <span>16</span>
          </Badge>
        </NavButton>
        <NavButton>
          <div>
            <FaUserAlt />
            <span>Contacts</span>
          </div>
        </NavButton>
        <NavButton active>
          <div>
            <FaFacebookMessenger />
            <span>Messages</span>
          </div>
          <Badge active>
            <span>1</span>
          </Badge>
        </NavButton>
        <NavButton>
          <div>
            <FaUsers />
            <span>New Group</span>
          </div>
        </NavButton>
      </Menu>
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
      <h1>Chats</h1>
      <img src={image} alt="" style={{ width: '100%' }}/>
    </Chats>
    <Messages>
      <h1>Messages</h1>
    </Messages>
  </Container>
);

export default Chat;