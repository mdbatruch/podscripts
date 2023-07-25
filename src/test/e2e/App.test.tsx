import * as React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom"

import App from '../../App';

describe('App', () => {
    it('renders App component', () => {

        // const div = document.createElement('div');
        render(<BrowserRouter><App /></BrowserRouter>);
    })
});