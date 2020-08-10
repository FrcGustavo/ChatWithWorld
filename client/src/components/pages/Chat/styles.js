import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns: 280px 450px 1fr;
width: 100%;
height: 100%;
overflow-y: auto;
`;

export const Navbar = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 28px;
`;

export const Chats = styled.div`
padding: 28px;
`;

export const Messages = styled.div`
background-color: yellow;
`;

export const Menu = styled.div`
`;

export const NavButton = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
border-radius: 21px;
padding: 14px;
text-align: left;
color: ${props => props.active ? "#FFF" : "#252525"};
background-color: ${props => props.active ? '#56CCF2' : ''};
cursor: pointer;
div {
  display: flex;
  align-items: center;
}

div svg {
  margin-right: 14px;
  color: ${props => props.active ? "#FFF" : "#252525"};
}
`

export const Feet = styled.div`
display: flex;
justify-content: space-between;
padding: 7px 14px;
span {
  font-size: 12px;
  font-weight: lighter;
  opacity: 0.8;
}
`;

export const Badge = styled.span`
display: flex;
justify-content: center;
align-items: center;
min-width: 17px;
height: 17px;
border-radius: 8.5px;
padding: 4.5px;
background-color: ${props => props.active ? '#FFF' : '#56CCF2' };
span {
  font-size: 12px;
  color: ${props => props.active ? '#56CCF2' : '#FFF' };
}
`;

export const ChatButton = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
border-radius: 21px;
padding: 14px;
background-color: ${props => props.active ? '#56CCF2' : ''};
cursor: pointer;

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

export const Search = styled.div`
padding: 14px;
padding-top: 0;
margin-bottom: 14px;
div {
  display: flex;
  border-radius: 14px;
  background-color: #F1F1F1;
  overflow: hidden;
  input, label {
    padding: 12px;
    background-color: transparent;
  }

  label svg {
    color: #BFBFBF;
  }

  input {
    width: 100%;
  }
}
`;