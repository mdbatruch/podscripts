import * as React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from '../../App';
import GlobalStyle from 'styles/globalStyles';
import MainProvider from 'contexts/MainContext';

describe('App', () => {
  it('renders App component', () => {
    // const div = document.createElement('div');
    render(
      <BrowserRouter>
      <MainProvider>
        <GlobalStyle />
        <App />
      </MainProvider>
    </BrowserRouter>
    );
  });
});
