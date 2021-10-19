import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/Redux/Store';
import SplashScreen from 'react-native-splash-screen';
import SideDrawer from './src/Config/SideDrawer';
import Loader from './src/Helper/Loader';
import 'react-native-gesture-handler';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <NavigationContainer>
          <SideDrawer />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
