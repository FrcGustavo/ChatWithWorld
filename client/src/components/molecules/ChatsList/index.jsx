import React from 'react';

import ChatButton from '../../atoms/ChatButton';

const ChatsList = ({ users }) => {
  return users.map((user, idx) => (
    <ChatButton
      key={idx}
      to={`/app/chat/${user.id}`}
      name={user.name}
      message=""
    />
  ));
};

export default ChatsList;