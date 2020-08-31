import React from 'react';

import InputText from '../../atoms/InputText';
import InputSubmit from '../../atoms/InputSubmit';

import { CSSFormContainer, H1 } from './styles';

const LoginForm = ({ handleSubmit, handleChange }) => {
  return (
    <CSSFormContainer>
      <H1>Entrar a la sala</H1>
      <form onSubmit={handleSubmit} >
          <InputText
              type="text"
              name="name"
              label="Nombre: "
              placeholder="Escribe tu nombre"
              handleChange={handleChange}
          />
          <InputText
              type="text"
              name="room"
              label="Sala: "
              placeholder="Escribe el nombre de la sala"
              handleChange={handleChange}
          />
          <InputSubmit>Entrar</InputSubmit>
      </form>
    </CSSFormContainer>
  );
};

export default LoginForm;
