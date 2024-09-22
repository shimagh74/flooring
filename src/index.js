import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FloorProvider from './context/FloorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FloorProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FloorProvider>
);
