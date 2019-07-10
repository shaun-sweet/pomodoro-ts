import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import Layout from './features/common/components/Layout';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </>
  );
};

export default App;
