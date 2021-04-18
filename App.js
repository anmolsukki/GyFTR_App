import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SideDrawer from './src/Config/SideDrawer';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <SideDrawer />
    </NavigationContainer>
  );
};

export default App;
