import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Navigation from './components/Navigation/Navigation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navigation />
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
