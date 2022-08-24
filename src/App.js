import React from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import { theme } from './styles/theme';
import Rotas from './routes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Rotas />
    </ChakraProvider>
  );
}

export default App;
