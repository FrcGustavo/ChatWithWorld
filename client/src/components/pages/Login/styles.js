import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-color: ${props => props.theme.dark};
`;

export const Div = styled.div`
width: 90%;
max-width: 400px;
padding: 28px;
border-radius: 7px;
background-color: #fff;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);

form div {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 14px;
  margin-bottom: 14px;
}

form div div {
  gap: 7px
}

form div div label {
  font-weight: 600;
}

form div div input {
  color: var(--text-b);
  padding-left: 7px;
}

form div div input:focus {
  outline: none;
}

form input[type="submit"] {
  background-color: #56CCF2;
  padding: 7px 14px;
  border-radius: 7px;
  box-shadow: box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  color: #FFF;
}*
`;

export const H1 = styled.div`
font-size: 21px;
text-align: center;
margin-bottom: 14px;
`;