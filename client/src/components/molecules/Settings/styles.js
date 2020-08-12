import styled from 'styled-components';

export const DarkModeButton = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
border-radius: 21px;
padding: 14px;
text-align: left;
color: ${
  props => props.theme.mode === 'dark'
    ? props.theme.light
    : props.theme.dark
}
`;