import styled from 'styled-components';

export const Feet = styled.div`
display: flex;
justify-content: space-between;
padding: 7px 14px;
span {
  font-size: 12px;
  font-weight: lighter;
  opacity: 0.8;
  color: ${
  props => props.theme.mode === "dark" 
    ? props.theme.light
    : props.theme.dark
  };
}
`;

export const StatusNet = styled.div`
display: flex;
justify-content: space-between;
padding: 7px 14px;
color: ${
  props => props.theme.mode === "dark" 
    ? props.theme.light
    : props.theme.dark
  };
`;