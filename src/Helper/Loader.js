import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Loader = ({ message }) => (
  <View style={styles.loadingView}>
    <ActivityIndicator size="large" color="#512DA8" />
    <Text style={styles.loadingText}>{message}</Text>
  </View>
);

export default Loader;

const styles = StyleSheet.create({
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loadingText: {
    color: '#512DA8',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
