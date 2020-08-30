import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-color: ${props => props.theme.dark};
`;

export const CSSFormContainer = styled.div`
width: 90%;
max-width: 400px;
padding: 28px;
border-radius: 7px;
background-color: #fff;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
`;

export const H1 = styled.div`
font-size: 21px;
text-align: center;
margin-bottom: 14px;
`;