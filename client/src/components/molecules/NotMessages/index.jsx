import React from 'react';

import CardMessage from '../../atoms/CardMessage';

import { CSSContainer } from './styles';

const NotMessages = () => (
  <CardMessage>
    <CSSContainer>
      <h1>Please select a conversation</h1>
    </CSSContainer>
  </CardMessage>
);

export default NotMessages;