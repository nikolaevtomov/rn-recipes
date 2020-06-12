import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, Platform} from 'react-native';
import Navigation from './components/navigation';

const App: React.FunctionComponent = () => {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <Navigation />
    </>
  );
};

export default App;
