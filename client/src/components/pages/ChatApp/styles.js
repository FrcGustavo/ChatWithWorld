import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns: 280px 450px 1fr;
grid-template-rows: 100vh;
width: 100%;
height: 100%;
background-color: ${
  props => props.theme.mode === "dark" 
    ? props.theme.dark
    : props.theme.light
  };
`;