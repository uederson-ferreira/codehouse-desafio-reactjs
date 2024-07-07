import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Encontre o elemento root
const container = document.getElementById('root');

// Crie uma raiz
const root = createRoot(container);

// Renderize a aplicação dentro da raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
