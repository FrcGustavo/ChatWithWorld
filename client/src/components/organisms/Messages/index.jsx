import React from 'react';
import { FaEllipsisV, FaPlus, FaCat, FaMicrophone } from 'react-icons/fa';

import { Div, Container, HeaderMessages, MS, SendMessage, UserMS } from './styles';

const Messages = () => (
  <Div>
    <Container>
      <div>
        <HeaderMessages>
          <div>
            <img src="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg" alt="" />
            <h3>Francisco Gustavo</h3>
          </div>
          <button><FaEllipsisV /></button>
        </HeaderMessages>
        <MS>
          <div>
            <UserMS>
              <span>
                Hello Fiend
              </span>
            </UserMS>
            <UserMS sender>
              <span>
                Hello Fiend
              </span>
            </UserMS>
            <UserMS>
              <span>
                Hello Fiend
              </span>
            </UserMS>
            <UserMS sender>
              <span>
                Hello Fiend
              </span>
            </UserMS>
          </div>
        </MS>
      </div>
      <SendMessage>
        <button><FaPlus /></button>
        <input type="text" placeholder="Type a message ..." />
        <button><FaCat /></button>
        <button><FaMicrophone /></button>
      </SendMessage>
    </Container>
  </Div>
);

export default Messages;
