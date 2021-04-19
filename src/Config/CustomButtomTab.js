import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Badge } from 'react-native-paper';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import * as actionCreator from '../Redux/Actions/Action/GlobalAction';

const CusttomButtomTab = (props) => {
  return (
    <View style={styles.bottomView}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Home');
              props.selectDrawerActions('Home');
            }}>
            <Icon name="home" color={'#A9A9A9'} size={25} />
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Profile');
              props.selectDrawerActions('Profile');
            }}>
            <Icon name="person" color={'#A9A9A9'} size={25} />
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={{ ...styles.customTabBarCenter, ...styles.shadow }}
            onPress={() => {
              props.navigation.navigate('Offer');
              props.selectDrawerActions('Offer');
            }}>
            <View style={styles.customTabBarView}>
              <Image
                source={require('../Assets/Icons/discount.png')}
                resizeMode="contain"
                style={{ width: 35, height: 35, flex: 1, marginLeft: 13 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Contact');
              props.selectDrawerActions('Contact');
            }}>
            <Icon name="call" color={'#A9A9A9'} size={25} />
            <Text>Contact</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Cart');
              props.selectDrawerActions('Cart');
            }}>
            <Badge style={{ backgroundColor: '#FFA500', position: 'absolute', right: -10, top: -15, zIndex: 2 }}>3</Badge>
            <Icon name="cart" color={'#A9A9A9'} size={25} />
            <Text>Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    width: '100%',
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: '#f7f3e9',
    borderRadius: 15,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
  },
  iconContainer: {
    top: 10,
    marginHorizontal: 15,
  },
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
  customTabBarCenter: {
    top: -15,
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

export default connect(mapStateToProps, mapDispatchToProps)(CusttomButtomTab);
