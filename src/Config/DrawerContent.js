import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <View style={{ paddingLeft: 20 }}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image source={require('../Assets/Icons/user.png')} size={50} />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.userTitle}>Anmol Singh</Title>
                <Caption style={styles.userCaption}>anmolsukki94@gmail.com</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => <Icon name="home-outline" color={color} size={size} />}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <Icon name="account-outline" color={color} size={size} />}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem label="Sign Out" icon={(color, size) => <Icon name="exit-to-app" color={color} size={size} />} />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  userTitle: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  userCaption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});

export default DrawerContent;
