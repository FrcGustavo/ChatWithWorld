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
/*
export const NavButton = styled.button`
div {
  display: flex;
  align-items: center;
}
`;
export const ChatButton = styled.button`
div {
  display: flex;
}

img {
  width: 45px;
  height: 45px;
  border-radius: 50%; 
}

div div {
  display: block;
  margin-left: 14px;
  text-align: left;
  color: ${props => props.active ? "#FFF" : "#252525"};
  h3 {
    margin-bottom: 7px;
    font-size: 15px;
  }
}
`;
*/