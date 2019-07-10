import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.darkPrimary} rga;
`;

export const HeaderText = styled.h1`
  color: ${props => props.theme.textOrIcons};
`;
