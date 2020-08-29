import React from 'react';

import InputSearch from '../../atoms/InputSearch';
import ChatsList from '../../molecules/ChatsList';

import { CSSChats } from './styles';

const Chats = () => (
  <CSSChats>
    <InputSearch />
    <ChatsList />
  </CSSChats>
);

export default Chats;
