import {StyleSheet} from 'react-native';
import {hp, wp} from '../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.appBackground,
    },
    centerHeaderText: {
      fontWeight: '700',
      color: theme.color.buttonText,
    },
    bgStatusBar: 'red',
    avatarSize: hp(4.5),
    containerList: {
      backgroundColor: theme.color.white,
      padding: hp(2),
      borderRadius: theme.borders.radius2,
      marginHorizontal: hp(2),
      width: wp(40),
      height: wp(35),
      marginBottom: hp(2.5),
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1.5,
      },
      shadowOpacity: 0.28,
      shadowRadius: 2.41,

      elevation: 4,
    },
    headingStyle: {
      justifyContent: 'center',
      textAlign: 'center',
      width: wp(30),
    },
    headerColor: {
      backgroundColor: theme.color.buttonBackground,
    },
    timestyle: {
      textAlign: 'center',
      marginTop: hp(2),
      fontSize: theme.size.medium,
    },
    modalContainer: {
      width: wp(70),
      padding: hp(2),
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.appBackground,
      borderRadius: hp(2),
    },
    avatarModelSize: hp(12),
    nameStyle: {
      marginTop: hp(2),
      fontSize: theme.size.medium,
      marginBottom: hp(2),
    },
    buttonContainer: {
      borderWidth: 0.75,
      borderColor: theme.color.buttonBackground,
      backgroundColor: theme.color.appBackground,
      width: wp(50),
      height: hp(5),
      marginTop: hp(1),
      marginBottom: hp(1),
      borderRadius: hp(2),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    textButtonStyles: {
      color: theme.color.textBlack,
    },
    buttonContainerLogOut: {
      borderWidth: 0.75,
      borderColor: theme.color.error,
      backgroundColor: theme.color.appBackground,
      width: wp(50),
      height: hp(5),
      marginTop: hp(1),
      marginBottom: hp(1),
      borderRadius: hp(2),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    textButtonLogoutStyles: {
      color: theme.color.error,
    },
    inputStyle: {
      color: '#000',
    },
    inputContainerStyle: {
      // backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: hp(0.08),
    },

    textContainer: {
      color: theme.color.error,
    },
    closebuttonContainer: {
      alignSelf: 'flex-end',
    },
    nameStyleModel: {
      top: hp(1),
      marginBottom: hp(2),
      width: wp(45),
      textAlign: 'center',
      fontWeight: '500',
    },
    containerView: {
      marginTop: hp(5),
    },
    profileView: {
      backgroundColor: theme.color.buttonBackground,
      borderBottomLeftRadius: theme.borders.radius3,
      borderBottomRightRadius: theme.borders.radius3,
      height: hp(10),
      alignItems: 'center',
    },
    avatarContainer: {
      position: 'absolute',
      bottom: hp(-5),
    },
    avatarSize: hp(15),
    cameraView: {
      position: 'absolute',
      height: hp(4),
      width: hp(4),
      right: wp(1),
      bottom: hp(1),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.avatarColor,
      borderWidth: 2,
      borderColor: theme.color.white,
      borderRadius: theme.borders.radius3,
    },
    errorStyle: {
      color: theme.color.error,

      fontSize: theme.size.xSmall,
      left: wp(3),
      bottom: hp(1.5),
    },
    imageView: {
      justifyContent: 'center',
    },
    headerContainer: {
      borderBottomLeftRadius: hp(2),
      borderBottomRightRadius: hp(2),
    },
    ProfileUpdateContainer: {
      backgroundColor: theme.color.buttonBackground,
      width: wp(82),
      height: hp(7),
      marginTop: hp(28),
      borderRadius: theme.borders.radius2,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: hp(5),
    },
  });
  return styles;
};
export default createStyles;
