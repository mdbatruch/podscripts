import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"

const renderApp = () => {
  const container = document.getElementById('root');
  if (!container) throw new Error('Cant find container to renderApp!');

  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

renderApp();
