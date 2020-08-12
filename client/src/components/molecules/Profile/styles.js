import styled from 'styled-components';

export const Div = styled.div`
text-align: center;
img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 14px; 
}

h1 {
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
  span:last-child {
    display: inline-block;
    border-radius: 50%;
    border: solid 3px #88F1A5;
    margin-left: 7px;
    width: 14px;
    height: 14px;
  }
}
`;