import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const CSSLink = styled(Link)`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 250px;
border-radius: 21px;
padding: 14px;
color: ${props => props.active ? '#FFF' : '#242424' };
background-color: ${props => props.active ? '#56CCF2' : '#FFF' };
text-decoration: none;
div {
  display: flex;
  align-items: center;

  svg {
    margin-right: 14px;
  }
}
`;