import styled from 'styled-components';

export const Div = styled.div`
padding: 28px;
`;

export const Container = styled.div`
display: grid;
grid-template-rows: calc(100% - 40px) 40px;
height: 100%;
overflow: hidden;
border-radius: 14px;
padding: 28px 0 0 0;
box-shadow: 0 0 7px ${
  props => props.theme.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.5)'
    : 'rgba(0, 0, 0, 0.5)'
};

> div:first-child {
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 0 28px;
  overflow: hidden;
}
`;

export const HeaderMessages = styled.header`
display: flex;
justify-content: space-between;
align-items: center; 
padding-bottom: 14px;

div {
  display: flex;
  align-items: center; 
}

img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

h3 {
  position: relative;
  margin-left: 14px;
  font-size: 15px;
  color: ${
    props => props.theme.mode === 'dark'
      ? props.theme.light
      : props.theme.dark
  };
}
h3:after {
  content: '';
  position: absolute;
  top: 6px;
  right: -24px;
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #88F1A5;
}

svg {
  color: ${
    props => props.theme.mode === 'dark'
      ? props.theme.light
      : props.theme.dark
  };
}
`;

export const MS = styled.div`
overflow-y: auto;
::-webkit-scrollbar {
  height: 20px;
}

div {
  padding-bottom: 14px;
}
`;

export const SendMessage = styled.div`
display: grid;
grid-template-columns: 40px 1fr 40px 40px;
grid-template-rows: 40px;
border-top: solid 1px ${
  props => props.theme.mode === 'dark'
    ? props.theme.light
    : props.theme.dark
};
padding: 0 28px;

button {
  width: 40px;
  height: 40px;
  svg {
    color: ${
      props => props.theme.mode === 'dark'
        ? props.theme.light
        : props.theme.dark
    };
  }
}

input {
  padding: 14px;
  background-color: ${
    props => props.theme.mode === 'dark'
      ? props.theme.dark
      : props.theme.light
  };
  color: ${
    props => props.theme.mode === 'dark'
      ? props.theme.light
      : props.theme.dark
  };
}
`;

export const UserMS = styled.div`
text-align: ${props => props.sender ? 'right' : 'left' };
padding: 14px 0;

span {
  display: inline-block;
  width: auto;
  max-width: 300px;
  border-radius: 14px;
  padding: 14px;
  text-align: left;
  background-color: ${props => props.sender ? '#56CCF2' : '#E2E2E2' };
  color: ${props => props.sender ? '#FFF' : '' };
}
`; 