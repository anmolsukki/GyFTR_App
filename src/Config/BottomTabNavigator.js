import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import OfferScreen from '../Screen/OfferScreen';
import ContactScreen from '../Screen/ContactScreen';
import CartScreen from '../Screen/CartScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ ...styles.customTabBarCenter, ...styles.shadow }}>
    <View style={styles.customTabBarView}>{children}</View>
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { position: 'absolute', bottom: 10, left: 10, right: 10, elevation: 0, backgroundColor: '#f7f3e9', borderRadius: 15, height: 60 },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icon name="home" color={focused ? '#FFA500' : '#A9A9A9'} size={25} />
              <Text>Home</Text>
            </View>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icon name="person" color={focused ? '#FFA500' : '#A9A9A9'} size={25} />
              <Text>Profile</Text>
            </View>
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Offer"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../Assets/Icons/discount.png')}
              resizeMode="contain"
              style={{ width: 35, height: 35, tintColor: focused ? '#FFA500' : '#A9A9A9' }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        component={OfferScreen}
      />
      <Tab.Screen
        name="Contact"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icon name="call" color={focused ? '#FFA500' : '#A9A9A9'} size={25} />
              <Text>Contact</Text>
            </View>
          ),
        }}
        component={ContactScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Icon name="cart" color={focused ? '#FFA500' : '#A9A9A9'} size={25} />
              <Text>Cart</Text>
            </View>
          ),
        }}
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  customTabBarCenter: {
    top: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customTabBarView: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#dedddd',
  },
});

export default BottomTabNavigator;
