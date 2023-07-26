import { render } from '@testing-library/react';
import { TestId } from '../../enums/testing';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import App from '../../App';

describe('Header', () => {
  it('Confirms Navigation is in the DOM', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const element = getByTestId(TestId.NAV_CONTAINER);
    expect(element).toBeVisible();
  });
});
