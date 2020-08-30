import React from 'react';

import { CSSInputText } from './styles';

const InputText = ({ type, name, label, placeholder }) => (
  <CSSInputText>
      <label htmlFor={name}>
          {label}
      </label>
      <input 
          type={type}
          name={name}
          placeholder={placeholder}
      />
  </CSSInputText>
);

export default InputText;
