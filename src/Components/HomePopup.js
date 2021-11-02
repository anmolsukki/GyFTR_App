import React from 'react';
import { Text, ImageBackground, View, Image } from 'react-native';
import { Modal } from '../Common/Modal';

const HomePopup = (props) => {
  const { isModalVisible, toggleModal } = props;

  return (
    <Modal isVisible={isModalVisible}>
      <Modal.Container style={{ backgroundColor: 'red' }}>
        <ImageBackground
          source={{ uri: 'http://jaywalker.io/demo/gyftr/independence-21/images/dots.png' }}
          resizeMode="cover"
          style={{ width: '100%' }}>
          <Modal.Close onClose={toggleModal} />
          <View style={{ position: 'relative' }}>
            <Image
              style={{ position: 'absolute', width: '100%', height: 40, alignItems: 'center', justifyContent: 'center' }}
              source={{ uri: 'http://jaywalker.io/demo/gyftr/independence-21/images/red.png' }}
            />
            <Modal.Body>
              <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 60 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>You are Rs 500</Text>
                <Text style={{ marginHorizontal: 50, paddingVertical: 10, alignSelf: 'center', textAlign: 'center' }}>
                  away from being eligible for Bronze level & receiving a voucher
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Worth Rs 1</Text>
              </View>
            </Modal.Body>
            <Image
              style={{ position: 'absolute', width: '100%', height: 40, bottom: 0, alignItems: 'center', justifyContent: 'center' }}
              source={{ uri: 'http://jaywalker.io/demo/gyftr/independence-21/images/green_bg.png' }}
            />
          </View>
        </ImageBackground>
      </Modal.Container>
    </Modal>
  );
};

export default HomePopup;
