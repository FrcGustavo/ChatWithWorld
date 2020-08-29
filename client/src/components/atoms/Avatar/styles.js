import styled from 'styled-components';

export const CSSImg = styled.img`
width: ${props => props.large ? '100px' : '45px' };
height: ${props => props.large ? '100px' : '45px' };
border-radius: 50%;
`;