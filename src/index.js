import React from "react";
import ReactDOM from "react-dom/client"; 
 
import App from "./App";
import './assets/index.css';
import { LanguageProvider } from './components/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
  <App />
</LanguageProvider>,
);
