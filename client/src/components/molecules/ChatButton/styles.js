import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
`;

export const Img = styled.img`
width: 45px;
height: 45px;
border-radius: 50%; 
`;

export const Div = styled.div`
display: block;
margin-left: 14px;
text-align: left;
color: ${
  props => (props.theme.mode === "dark" || props.active)
    ? props.theme.light
    : props.theme.dark
};
/*color: ${props => props.active ? "#FFF" : "#252525"};*/
h3 {
  margin-bottom: 7px;
  font-size: 15px;
}
`;