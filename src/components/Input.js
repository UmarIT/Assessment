import {Input} from '@rneui/themed';
import React, {forwardRef} from 'react';
import {StyleSheet} from 'react-native';
import {useThemeAwareObject} from '../theme/index';
import {hp, wp} from '../util';
import Text from './CustomText';

const RnInputField = forwardRef((props, ref) => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      inputContainer: {
        backgroundColor: '#F5F5F5',
        borderColor: '#f5f5f5',
        borderRadius: theme.borders.radius1,

        paddingLeft: wp(2.5),
        height: hp(7.5),
      },

      container: {
        height: hp(7.5),
        marginBottom: hp(0.5),
      },
      textStyle: {
        fontSize: theme.size.xsmall,
      },
      errorText: {
        fontSize: theme.size.xsmall,
        paddingHorizontal: wp(5),
        color: theme.color.errorText,
        marginBottom: hp(0.5),
      },
      placeholderColor: '#aaa',
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      <Input
        ref={ref}
        inputStyle={props.inputStyle}
        containerStyle={[styles.container, props.containerStyle]}
        onFocus={props.onPress}
        // onPress={props.onPress}
        inputContainerStyle={[styles.inputContainer, props.inputContainerStyle]}
        leftIcon={props.leftIcon}
        rightIcon={props.rightIcon}
        secureTextEntry={props.secure}
        editable={props.editable}
        multiline={props.multiline}
        placeholder={props.placeholder}
        numberOfLines={props.numberOfLines}
        placeholderTextColor={styles.placeholderColor}
        style={[styles.textStyle, props.style]}
        maxLength={props.maxLength}
        onChangeText={props.onChangeText}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        keyboardType={props.keyboardType}
      />
      <Text style={[styles.errorText, props.errorStyle]}>{props.error}</Text>
    </>
  );
});

export default RnInputField;
