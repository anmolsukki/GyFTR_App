import React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerContent from './DrawerContent';
import AllBrandScreen from '../Screen/AllBrandScreen';

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();

const gyftrHeader = () => (
  <View style={{ flex: 1 }}>
    <Image style={{ maxHeight: 55 }} source={require('../Assets/logo.png')} resizeMethod={'resize'} resizeMode={'contain'} />
  </View>
);

const MainStackScreen = ({ navigation }) => (
  <MainStack.Navigator
    screenOptions={() => ({
      headerTitleAlign: 'center',
      headerTitle: () => gyftrHeader(),
    })}>
    <MainStack.Screen
      name="MainPage"
      component={BottomTabNavigator}
      options={{
        headerLeft: () => (
          <Icon
            style={{ paddingLeft: 10 }}
            name="menu"
            color="#000"
            size={30}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
        headerRight: () => (
          <Icon
            style={{ paddingRight: 15 }}
            name="search"
            color="#000"
            size={30}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
    <MainStack.Screen
      name="AllBrands"
      component={AllBrandScreen}
      options={{
        headerLeft: () => (
          <Icon
            style={{ paddingLeft: 10 }}
            name="menu"
            color="#000"
            size={30}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
        headerRight: () => (
          <Icon
            style={{ paddingRight: 15 }}
            name="search"
            color="#000"
            size={30}
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
