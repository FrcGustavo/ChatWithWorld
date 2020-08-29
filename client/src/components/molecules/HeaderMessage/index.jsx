import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

import Avatar from '../../atoms/Avatar';

import { CSSHeader, CSSContainer } from './styles';

const HeaderMessage = ({ img, name }) => (
  <CSSHeader>
    <CSSContainer>
      <Avatar src={img} alt={name} />
      <h3>{name}</h3>
    </CSSContainer>
    <button><FaEllipsisV /></button>
  </CSSHeader>
);

export default HeaderMessage;
