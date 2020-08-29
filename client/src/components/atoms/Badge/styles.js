import styled from 'styled-components';

export const Span = styled.span`
display: flex;
justify-content: center;
align-items: center;
min-width: 17px;
height: 17px;
border-radius: ${props => props.isCircle ? '50%' : '8.5px'};
padding: 4.5px;
font-size: 12px;
color: ${props => props.active ? '#56CCF2' : '#FFF' };
background-color: ${props => props.active ? '#FFF' : '#56CCF2' };
`;
