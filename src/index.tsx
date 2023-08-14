import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { loadFonts } from 'utils/fontUtil';
import MainProvider from 'contexts/MainContext';

const renderApp = () => {
  const container = document.getElementById('root');
  if (!container) throw new Error('Cant find container to renderApp!');

  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <MainProvider>
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
