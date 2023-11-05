import React from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useThemeAwareObject} from '../theme/index';

const CustomModal = props => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({});
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);

  return (
    <ReactNativeModal
      isVisible={props.show}
      onBackButtonPress={props.backButton}
      onBackdropPress={props.backDrop}
      onRequestClose={props.requestClose}
      hasBackdrop
      backdropOpacity={0.7}
      backdropColor="rgba(0,0,0,1)">
      <View style={props.style}>{props.children}</View>
    </ReactNativeModal>
  );
};

export default CustomModal;
