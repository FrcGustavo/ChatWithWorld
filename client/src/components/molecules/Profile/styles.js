import styled from 'styled-components';

export const CSSProfile = styled.div`
text-align: center;
`;

export const CSSH1 = styled.h1`
display: flex;
justify-content: center;
align-items: center;
span {
  font-size: 21px;
  color: ${
    props => props.theme.mode === "dark" 
      ? '#FFF'
      : '#242424'
    };
}
`;

export const CSSStatus = styled.span`
display: inline-block;
border-radius: 50%;
border: solid 3px #88F1A5;
margin-left: 7px;
width: 14px;
height: 14px;
`; 