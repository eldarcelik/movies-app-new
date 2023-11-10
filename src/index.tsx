import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'test') {
    return;
  }

  const { worker } = await import('./__mocks__/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  const container = document.getElementById('root');
  const root = createRoot(container as HTMLElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
