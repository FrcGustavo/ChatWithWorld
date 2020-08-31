import React, { useState } from 'react';

import InputSearch from '../../atoms/InputSearch';
import ChatsList from '../../molecules/ChatsList';

import { CSSChats } from './styles';
import { useEffect } from 'react';

const Chats = ({ users, filterUsers }) => {
  return(
    <CSSChats>
      <InputSearch handleChange={filterUsers} />
      <ChatsList users={users}/>
    </CSSChats>
  );
};

export default React.memo(Chats);
