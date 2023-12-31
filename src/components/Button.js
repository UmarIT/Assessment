import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useThemeAwareObject} from '../theme/index';
import {hp, wp} from '../util/index';
import Text from './CustomText';

function RnButton(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      whiteColor: theme.color.white,
      buttonContainer: {
        height: hp(7.5),
        width: wp(50),
        backgroundColor: theme.color.buttonBackground,
        borderRadius: theme.borders.radius1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      },
      disabledButton: {
        backgroundColor: theme.color.disableButton,
      },
      buttonText: {
        color: theme.color.buttonText,
        fontWeight: '700',
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      {!props.loading ? (
        !props.disabled ? (
          <TouchableOpacity
            style={[styles.buttonContainer, props.style[0]]}
            onPress={props.onPress}
            hitSlop={props.hitSlop}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.buttonText, props.style[1]]}>
                {props.title1}
              </Text>
              {props.title2 && (
                <Text style={props.style[2]}>{props.title2}</Text>
              )}
            </View>
            {props.children && props.children}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            disabled
            style={[
              styles.buttonContainer,
              props.style[0],
              styles.disabledButton,
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.buttonText, props.style[1]]}>
                {props.title1}
              </Text>
              {props.title2 && (
                <Text style={props.style[2]}>{props.title2}</Text>
              )}
            </View>
            {props.children && props.children}
          </TouchableOpacity>
        )
      ) : (
        <TouchableOpacity
          disabled
          style={[styles.buttonContainer, props.style[0]]}
          onPress={props.onPress}>
          <ActivityIndicator color={styles.whiteColor} />
        </TouchableOpacity>
      )}
    </>
  );
}

export default RnButton;
