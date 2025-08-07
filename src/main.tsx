import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // .tsx extension automatically resolve ho jata hai
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
