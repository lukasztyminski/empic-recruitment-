import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { GlobalStyle } from 'styles/globalStyle';
import ProductsProvider from 'providers/ProductsProvider';
import ListProducts from 'components/ListProducts/ListProducts';
import Basket from 'components/Basket/Basket';
import TotalOrder from 'components/TotalOrder/TotalOrder';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <GlobalStyle />
        <div className="container">
          <ListProducts />
          <Basket />
          <TotalOrder />
        </div>
      </ProductsProvider>
    </ThemeProvider>
  );
};

export { App };
