import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const CSSLink = styled(Link)`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 450px;
border-radius: 21px;
padding: 14px;
color: ${props => props.active ? '#FFF' : '#242424' };
background-color: ${props => props.active ? '#56CCF2' : '#FFF' };
text-decoration: none;
`;

export const Wrapper = styled.div`
display: flex;
`;

export const Div = styled.div`
display: block;
margin-left: 14px;
text-align: left;
color: ${
  props => (props.theme.mode === "dark" || props.active)
    ? props.theme.light
    : props.theme.dark
};
h3 {
  margin-bottom: 7px;
  font-size: 15px;
}
`;