import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import Root from 'views/Root';
import AppProviders from 'providers/AppProviders';

render(
  <StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </StrictMode>,
  document.getElementById('root')
);
