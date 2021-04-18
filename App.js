import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import SideDrawer from './src/Config/SideDrawer';
import store from './src/Redux/Store';
import 'react-native-gesture-handler';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SideDrawer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
