import styled from 'styled-components';

export const CSSMessage = styled.div`
text-align: ${props => props.sender ? 'right' : 'left' };
padding: 14px 0;

span {
  display: inline-block;
  width: auto;
  max-width: 300px;
  border-radius: 14px;
  padding: 14px;
  text-align: left;
  background-color: ${props => props.sender ? '#56CCF2' : '#E2E2E2' };
  color: ${props => props.sender ? '#FFF' : '#242424' };
}
`;