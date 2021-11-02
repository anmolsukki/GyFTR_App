import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import HomePopup from '../../Components/HomePopup';
import * as actionCreator from '../../Redux/Actions/Action/GlobalAction';

const HomeScreen = (props) => {
  const [state, setState] = useState({ isModalVisible: false });

  const toggleModal = () => {
    setState({ isModalVisible: !state.isModalVisible });
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        <Button title={'Store Persist'} buttonStyle={styles.btnIdle} onPress={() => props.presistActions('HomePage Persist')} />
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        <Button title={'Submit'} buttonStyle={styles.btnIdle} onPress={toggleModal} />
        <HomePopup isModalVisible={state.isModalVisible} toggleModal={toggleModal} />
      </View>
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

const styles = StyleSheet.create({
  btnIdle: {
    backgroundColor: '#007CA0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
});
