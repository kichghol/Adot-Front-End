import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider,extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config })

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement || null);
root.render(

  <React.StrictMode>
    <ChakraProvider theme= {theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

