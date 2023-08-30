import MainProvider from 'contexts/MainContext';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/globalStyles';
import { loadFonts } from 'utils/fontUtil';
import App from './App';

const renderApp = () => {
  const container = document.getElementById('root');
  if (!container) throw new Error('Cant find container to renderApp!');

  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <MainProvider>
        <GlobalStyle />
        <App />
      </MainProvider>
    </BrowserRouter>
  );
};

Promise.all([loadFonts()])
  .then(renderApp)
  .catch((error) => {
    console.log('inital error', error);
  });

renderApp();
