import React from 'react';

import { CSSInputText } from './styles';

const InputText = ({ type, name, label, placeholder, handleChange }) => (
  <CSSInputText>
      <label htmlFor={name}>
          {label}
      </label>
      <input 
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
      />
  </CSSInputText>
);

export default InputText;
