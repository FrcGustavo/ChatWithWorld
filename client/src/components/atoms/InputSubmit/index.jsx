import React from 'react';

import { CSSInputSubmit } from './styles';

const InputSubmit = ({ children }) => (
  <CSSInputSubmit type="submit" value={children}/>
);

export default InputSubmit;
