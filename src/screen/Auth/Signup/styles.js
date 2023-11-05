import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.appBackground,
    },
    contentContainerStyle: {
      marginHorizontal: wp(8),
      flexGrow: 1,
    },
    bgStatusBar: theme.color.appBackground,
    inputStyle: {
      color: theme.color.textBlack,
    },
    imageView: {
      justifyContent: 'center',
    },
    inputContainerStyle: {
      borderColor: 'red',
      borderWidth: hp(0.08),
    },
    imageStyle: {
      width: hp(13),
      height: hp(13),
      alignSelf: 'center',
      marginTop: hp(10),
    },
    successMessage: theme.color.buttonBackground,
    loginContainer: {
      backgroundColor: theme.color.buttonBackground,
      width: wp(82),
      height: hp(7),
      marginTop: hp(5),
      borderRadius: theme.borders.radius2,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: hp(10),
    },
    doNotHaveAccountView: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: hp(18),
      marginBottom: hp(3),
    },
    textAnAccount: {
      color: theme.color.textBlack,
    },
    signUp: {
      color: theme.color.buttonBackground,
      textDecorationLine: 'underline',
      fontFamily: theme.family.bold,
    },
  });
  return styles;
};
export default createStyles;
