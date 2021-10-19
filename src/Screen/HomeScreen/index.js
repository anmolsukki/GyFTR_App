import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/Action/GlobalAction';

const HomeScreen = (props) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => props.presistActions('HomePage Persist')}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log(state.globalData);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    presistActions: (payload) => dispatch(actionCreator.presistActions(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
