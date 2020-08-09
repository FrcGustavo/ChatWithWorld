import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns: 300px 1fr 1fr;
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
background-color: green;
`;

export const Messages = styled.div`
background-color: yellow;
`;

export const Profile = styled.div`
text-align: center;
img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 14px; 
}

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 21px;
  }
  span:last-child {
    display: inline-block;
    border-radius: 50%;
    border: solid 3px #88F1A5;
    margin-left: 7px;
    width: 14px;
    height: 14px;
  }
}
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

export const Badge = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: ${props => props.active ? '17px' : '34px' };;
height: 17px;
border-radius: ${props => props.active ? '50%' : '14px' };
background-color: ${props => props.active ? '#FFF' : '#56CCF2' };
span {
  font-size: 12px;
  color: ${props => props.active ? '#56CCF2' : '#FFF' };
}
`; 