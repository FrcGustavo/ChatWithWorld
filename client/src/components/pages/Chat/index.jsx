import React from 'react';
import { FaPhoneAlt, FaUserAlt, FaFacebookMessenger, FaUsers, FaRegSun, FaToggleOff, FaSignal, FaSearch } from 'react-icons/fa';
import MenuItem from '../../molecules/MenuItem';

import image from '../../../image.png'

import { Container, Navbar, Chats, Messages, Profile, Menu, NavButton, Feet, Badge, ChatButton, Search } from './styles';

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
        <MenuItem
          label="Calls"
          icon={<FaPhoneAlt />}
          badge="1"
        />
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