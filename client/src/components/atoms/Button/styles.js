import styled from "styled-components";

export const Container = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
border-radius: 21px;
padding: 14px;
color: ${props => props.active ? "#FFF" : "#252525"};
background-color: ${props => props.active ? '#56CCF2' : ''};
`;