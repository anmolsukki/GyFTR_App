import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomButtomTab from '../../Config/CustomButtomTab';

const AllBrandScreen = ({ navigation }) => {
  return (
    <View style={styles.containerMain}>
      <Text>All Brand Screen</Text>
      <CustomButtomTab navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
});

export default AllBrandScreen;
