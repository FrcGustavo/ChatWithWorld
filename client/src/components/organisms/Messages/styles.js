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

`;

export const MS = styled.div`
height: 100%;
padding: 28px;
overflow-y: auto;

::-webkit-scrollbar {
  height: 0px;
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