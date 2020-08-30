import React, { useState  } from 'react';

import InputText from '../../atoms/InputText';
import InputSubmit from '../../atoms/InputSubmit';

import { CSSFormContainer, H1 } from './styles';

const LoginForm = ({ history }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleChange = (event) => {
      console.log(event.target.value);
      if (event.target.name === 'name')
          setName(event.target.value);
      if (event.target.name === 'room')
          setRoom(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      if (!name || !room || name === '' || room === '') {
          alert('Please write all fields');
          return false;
      }
      history.push(`/app/chat/`);  
  };

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
