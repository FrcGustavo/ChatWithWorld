import React from 'react';
import { FaEllipsisV, FaPlus, FaCat, FaMicrophone } from 'react-icons/fa';

import CardMessage from '../../atoms/CardMessage';
import Message from '../../atoms/Message';
import { Div, Container, HeaderMessages, MS, SendMessage, UserMS } from './styles';

const Messages = () => (
  <CardMessage>
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
          {
            [1,2,3,4,5,6,7,8,9,10].map((num, idx) => (
              <Message key={idx} sender={num % 2 === 0}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloremque necessitatibus ipsa natus consectetur consequuntur ducimus quia!
              </Message>
            ))
          }
        </div>
      </MS>
    </div>
    <SendMessage>
      <button><FaPlus /></button>
      <input type="text" placeholder="Type a message ..." />
      <button><FaCat /></button>
      <button><FaMicrophone /></button>
    </SendMessage>
  </CardMessage>
);

export default Messages;
