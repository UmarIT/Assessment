// In App.js in a new project

import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainStack from './src/navigation/index';
import {persistor, store} from './src/redux/store/';

import {SafeAreaProvider} from 'react-native-safe-area-context';
function App() {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainStack />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
