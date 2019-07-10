import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
  /* background: ${props => props.theme.lightPrimary}; */
  background: linear-gradient(to bottom, #00f260, #0575e6);
`;
