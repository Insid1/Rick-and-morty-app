import './style.css';
import ReactDOM from 'react-dom/client';

import React from 'react';
import App from './components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <div>Hello 12232123 React!</div>
    <App />
  </React.StrictMode>,
);
