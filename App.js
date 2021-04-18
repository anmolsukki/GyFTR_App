import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabNavigator from './src/Config/BottomTabNavigator';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Main Screen"
      options={{
        gestureEnabled: true,
        headerStyle: { backgroundColor: '#009387' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' },
        headerLeft: () => (
          <Icon
            style={{ paddingLeft: 10 }}
            name="menu"
            size={30}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
      component={BottomTabNavigator}
    />
  </HomeStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
