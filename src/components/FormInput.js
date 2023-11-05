import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Text from './CustomText';
import {useThemeAwareObject} from '../theme/index';
import {hp, wp} from '../util';
import Entypo from 'react-native-vector-icons/Entypo';
const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChangeText,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
  value,
  input,
  maxLength,
  labelTextStyle,
  errorTextStyle,
  placeholderTextColor,
  onChange,
  editable,
  autoFocus,
  star,
}) => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      labelView: {
        flexDirection: 'row',
      },
      labelText: {
        color: theme.color.textBlack,
        fontSize: theme.size.small,
        marginLeft: wp(2),
        bottom: hp(1),
      },
      inputView: {
        flexDirection: 'row',
        height: hp(7),
        paddingHorizontal: wp(3.5),

        alignSelf: 'center',
        borderRadius: hp(2),
        backgroundColor: '#F5F5F5',
      },
      errorText: {
        color: theme.color.error,
        marginLeft: wp(1.8),
        marginTop: hp(0.7),
        marginBottom: hp(1),
        fontSize: theme.size.xSmall,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);

  return (
    <View style={{...containerStyle}}>
      {/* label & error msg */}
      <View style={styles.labelView}>
        <Text style={[styles.labelText, labelTextStyle]}>{label}</Text>
        {star && (
          <Entypo
            name="star"
            size={8}
            color={'red'}
            style={{marginLeft: wp(2)}}
          />
        )}
      </View>
      {/* Text Input */}
      <View style={[styles.inputView, input]}>
        {prependComponent}

        <TextInput
          style={{
            flex: 1,
            ...inputStyle,
          }}
          placeholder={placeholder}
          placeholderTextColor={'#aaa'}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={onChangeText}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
          editable={editable}
          autoFocus={autoFocus}
        />

        {appendComponent}
      </View>
      <Text style={[styles.errorText, errorTextStyle]}>{errorMsg}</Text>
    </View>
  );
};
export default FormInput;
