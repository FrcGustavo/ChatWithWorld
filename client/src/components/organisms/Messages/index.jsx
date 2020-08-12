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
            {
              [1,2,3,4,5,6,7,8,9,10].map((num, idx) => {
                if(num % 2 === 0) {
                  return (
                    <UserMS key={idx}>
                      <span>
                        Hello Friend
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloremque necessitatibus ipsa natus consectetur consequuntur ducimus quia!
                      </span>
                    </UserMS>
                  );
                }
                return (
                  <UserMS sender key={idx}>
                    <span>
                      Hello Friend
                      Quia reiciendis nulla reprehenderit sint, quam accusantium necessitatibus perferendis, exercitationem voluptates ullam voluptatum.
                    </span>
                  </UserMS>
                );
              })
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
    </Container>
  </Div>
);

export default Messages;
