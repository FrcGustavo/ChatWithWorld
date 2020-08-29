import React from 'react';
import PropsTypes from 'prop-types';

import { CSSMessage } from './styles';

const Message = ({ children, sender }) => (
  <CSSMessage sender={sender}>
    <span>
      {children}
    </span>
  </CSSMessage>
);

Message.defaultProps = {
  sender: false,
};

Message.propsTypes = {
  children: PropsTypes.string.isRequired,
  sender: PropsTypes.bool,
};

export default Message;
