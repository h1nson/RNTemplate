import React from 'react';
import {NativeBaseProvider, extendTheme, Box} from 'native-base';
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <NativeBaseProvider config={config}>
      <Box flex={1}>
        <AppNavigation />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
