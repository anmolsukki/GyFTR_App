import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import OfferScreen from '../Screen/OfferScreen';
import ContactScreen from '../Screen/ContactScreen';
import CartScreen from '../Screen/CartScreen';

const Tab = createBottomTabNavigator();

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
              <Image
                source={require('../Assets/Icons/home.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }}
              />
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
              <Image
                source={require('../Assets/Icons/search.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }}
              />
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
            <View style={styles.iconContainer}>
              <Image
                source={require('../Assets/Icons/plus.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }}
              />
              <Text>Offer</Text>
            </View>
          ),
        }}
        component={OfferScreen}
      />
      <Tab.Screen
        name="Contact"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('../Assets/Icons/settings.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }}
              />
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
              <Image
                source={require('../Assets/Icons/chat.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }}
              />
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
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
});

export default BottomTabNavigator;
