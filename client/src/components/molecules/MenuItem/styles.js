import styled from 'styled-components';

export const Div = styled.div`
display: flex;
align-items: center;
color: ${
  props => props.theme.mode === "dark" 
    ? '#FFF'
    : '#242424'
  };
svg {
  margin-right: 14px;
  color: ${
    props => props.theme.mode === "dark" 
      ? '#FFF'
      : '#242424'
    };
}
`;