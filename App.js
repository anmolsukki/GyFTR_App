import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SideDrawer from './src/Config/SideDrawer';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <SideDrawer />
    </NavigationContainer>
  );
};

export default App;
