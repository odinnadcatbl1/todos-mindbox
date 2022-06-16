import React from 'react';
import ReactDOM from 'react-dom/client';

import Container from '@mui/material/Container'
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container maxWidth='sm'>
      <App/>
    </Container>
  </React.StrictMode>
);

