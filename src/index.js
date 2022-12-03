//& Imports Modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Since React 18, we use  / Import from react-dom/client !

//& Import Component
import { App } from './App/App';

//& Imports SCSS
import './assets/sass/index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

