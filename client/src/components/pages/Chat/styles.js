import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns: 280px 450px 1fr;
width: 100%;
height: 100%;
overflow-y: auto;
`;

export const Chats = styled.div`
padding: 28px;
`;

export const Messages = styled.div`
background-color: yellow;
`;

export const Menu = styled.div`
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