import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RNModal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Modal = (props) => {
  return (
    <RNModal
      isVisible={props.isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}>
      {props.children}
    </RNModal>
  );
};

const ModalContainer = (props) => <View style={styles.container}>{props.children}</View>;

const ModalHeader = (props) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{props.title}</Text>
  </View>
);

const ModalClose = (props) => (
  <TouchableOpacity style={styles.headerClose} onPress={props.onClose}>
    <Icon name="close" color="#FFFFFF" style={{ fontWeight: 'bold', fontSize: 16 }} />
  </TouchableOpacity>
);

const ModalBody = (props) => <View style={styles.body}>{props.children}</View>;

const ModalFooter = (props) => <View style={styles.footer}>{props.children}</View>;

Modal.Container = ModalContainer;
Modal.Header = ModalHeader;
Modal.Close = ModalClose;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  headerClose: {
    position: 'absolute',
    right: 0,
    padding: 10,
    backgroundColor: '#F44336',
    borderRadius: 3,
    zIndex: 5,
  },
  body: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    minHeight: 100,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
});
