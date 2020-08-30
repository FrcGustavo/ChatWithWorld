import React, { useState } from 'react';

import InputText from '../../atoms/InputText';
import InputSubmit from '../../atoms/InputSubmit';

import { Container, CSSFormContainer, H1 } from './styles';


const Login = ({ history }) => {
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
        history.push(`/app/chat/`);  
    };
    
    return (
        <Container>
            <CSSFormContainer>
                <H1>Entrar a la sala</H1>
                <form onSubmit={handleSubmit} >
                    <InputText
                        type="text"
                        name="name"
                        label="Nombre: "
                        placeholder="Escribe tu nombre"
                    />
                    <InputText
                        type="text"
                        name="room"
                        label="Sala: "
                        placeholder="Escribe el nombre de la sala"
                    />
                    <InputSubmit>Entrar</InputSubmit>
                </form>
            </CSSFormContainer>
        </Container>
    );
}

export default Login;
