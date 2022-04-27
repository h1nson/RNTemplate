import React from 'react';
import {NativeBaseProvider, extendTheme, Box} from 'native-base';
import mindAppTheme from '@/common/theme';
const theme = extendTheme(mindAppTheme);
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <NativeBaseProvider theme={theme} config={config}>
      <Box flex={1}>
        <AppNavigation />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
