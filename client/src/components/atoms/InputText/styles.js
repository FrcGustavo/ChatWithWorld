import styled from 'styled-components';

export const CSSInputText = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
gap: 7px;
margin-bottom: 14px;

label {
  font-weight: 600;
}

input {
  color: var(--text-b);
  padding-left: 7px;
}

input:focus {
  outline: none;
}
`;