import React from "react";
import './assets/index.css';
import { LanguageProvider } from './components/LanguageContext';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <LanguageProvider>
  <App />
</LanguageProvider>,
);
