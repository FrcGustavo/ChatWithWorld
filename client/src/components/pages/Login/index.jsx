import React, { useState } from 'react';

import { Container, Div, H1 } from './styles';

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
        history.push(`chat?name=${name}&room=${room}`);  
    };
    
    return (
        <Container>
            <Div>
                <H1>Entrar a la sala</H1>
                <form onSubmit={handleSubmit} >
                    <div>
                        <div>
                            <label htmlFor="">Nombre:</label>
                            <input type="text" name="name" placeholder="Escribe tu nombre" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="">Sala:</label>
                            <input type="text" name="room" placeholder="Escribe el nombre de la sala" onChange={handleChange} />
                        </div>
                    </div>
                    <input type="submit" value="Entrar" />
                </form>
            </Div>
        </Container>
    );
}

export default Login;
