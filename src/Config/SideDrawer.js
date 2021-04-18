import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = ({ navigation }) => (
  <MainStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#009387' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' },
    }}>
    <MainStack.Screen
      name="Main"
      component={BottomTabNavigator}
      options={{
        title: 'Home Screen',
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
    />
  </MainStack.Navigator>
);

const SideDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="MainPage" component={MainStackScreen} />
    </Drawer.Navigator>
  );
};

export default SideDrawer;
