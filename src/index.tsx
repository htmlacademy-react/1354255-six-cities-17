import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { PLACES } from '@/utils/mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App places={PLACES} />
  </React.StrictMode>
);
