import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as actionCreator from '../Redux/Actions/Action/GlobalAction';

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
                <Caption style={styles.userCaption}>9878986993</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              labelStyle={{ fontSize: 17, color: props.drawerData === 'Home' ? '#FFA500' : '#A9A9A9', fontWeight: '600' }}
              icon={() => <Icon name="home" color={props.drawerData === 'Home' ? '#FFA500' : '#A9A9A9'} size={30} />}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
                props.selectDrawerActions('Home');
              }}
            />
            <DrawerItem
              labelStyle={{ fontSize: 17, color: props.drawerData === 'Profile' ? '#FFA500' : '#A9A9A9', fontWeight: '600' }}
              icon={() => <Icon name="account-outline" color={props.drawerData === 'Profile' ? '#FFA500' : '#A9A9A9'} size={30} />}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
                props.selectDrawerActions('Profile');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sign Out"
          labelStyle={{ fontSize: 17, color: '#A9A9A9', fontWeight: '600' }}
          icon={() => <Icon name="exit-to-app" color={'#A9A9A9'} size={30} />}
        />
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

const mapStateToProps = (state) => {
  return {
    drawerData: state.globalData.drawerStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectDrawerActions: (payload) => dispatch(actionCreator.selectDrawerActions(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
