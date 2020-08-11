import styled from 'styled-components';

export const Div = styled.div`
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