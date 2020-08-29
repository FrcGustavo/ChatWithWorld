import React from 'react';

import ChatButton from '../../atoms/ChatButton';

const ChatsList = () => (
  <>
    <ChatButton
      to="/app/chat/my-id"
      name="Francisco Gustavo"
      message="Hello friend in hard code"
      badge="16"
    />
    <ChatButton
      to="/app/chat/my-id"
      name="Francisco Gustavo"
      message="Hello friend in hard code"
      badge="1"
      active
    />
  </>
);

export default ChatsList;