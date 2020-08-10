import styled from 'styled-components';

export const Div = styled.div`
display: flex;
align-items: center;
svg {
  margin-right: 14px;
  color: ${props => props.active ? "#FFF" : "#252525"};
}
`;