import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/globalStyle';
import { theme } from 'styles/theme';
import ProductsProvider from 'providers/ProductsProvider';

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <GlobalStyle />
        {children}
      </ProductsProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
