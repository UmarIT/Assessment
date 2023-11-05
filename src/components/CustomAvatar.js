import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from '@rneui/themed';
import {baseUrl} from '../constants';
import {useThemeAwareObject} from '../theme';

function CustomAvatar(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      avatarContainer: {
        backgroundColor: theme.color.avatarColor,
        borderWidth: 2,
        borderColor: theme.color.white,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);

  return props.image == null || props.image == `${baseUrl.imgUrl}null` ? (
    <Avatar
      icon={{name: 'user', type: 'font-awesome'}}
      size={props.size}
      rounded={props.notRounded ? false : true}
      containerStyle={[styles.avatarContainer, props.avatarContainer]}
    />
  ) : (
    <Avatar
      source={{uri: props.image}}
      rounded={props.notRounded ? false : true}
      size={props.size}
      containerStyle={[styles.avatarContainer, props.avatarContainer]}
      onPress={props.onPress}
      activeOpacity={0.7}
    />
  );
}

export default CustomAvatar;
