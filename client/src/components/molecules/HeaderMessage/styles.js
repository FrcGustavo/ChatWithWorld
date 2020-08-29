import styled from 'styled-components';

export const CSSHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 28px 14px;

img {
  width: 35px;
  height: 35px;
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

export const CSSContainer = styled.div`
display: flex;
align-items: center;
`;