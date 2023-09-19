import { render } from '@testing-library/react';
import { TestId } from '../../enums/testing';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import MainProvider from 'contexts/MainContext';
import GlobalStyle from 'styles/globalStyles';

describe('Header', () => {
  it('Confirms Navigation is in the DOM', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MainProvider>
          <GlobalStyle />
          <App />
        </MainProvider>
      </BrowserRouter>
    );
    const element = getByTestId(TestId.NAV_CONTAINER);
    expect(element).toBeVisible();
  });
});
