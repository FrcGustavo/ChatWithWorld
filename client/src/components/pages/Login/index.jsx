import React, { useState, useContext } from 'react';

import { UserContext } from '../../../store';
//import { login } from '../../../services';
import LoginForm from '../../organisms/LoginForm';

import { Container } from './styles';

const Login = ({ history }) => {
    const { dispatch } = useContext(UserContext);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  
    const handleChange = (event) => {
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

        dispatch({ type: 'login', payload: { name, room } });
        // console.log(state);
        history.push(`/app/chat/`); 

        /*login({ name, room })
          .then((data) => {
              dispatch({ user: data.user });
              history.push(`/app/chat`);  
          })
          .catch((err) => console.log(err));*/
    };
  
    return (
        <Container>
            <LoginForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </Container>
    );
};

export default Login;
