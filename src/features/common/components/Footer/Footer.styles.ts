import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

export const FooterText = styled.p`
  color: ${props => props.theme.textOrIcons};
`;
