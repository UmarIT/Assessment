import {Header} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useThemeAwareObject} from '../theme/index';
import {hp, wp} from '../util';

function RnHeader(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      statusBar: {
        backgroundColor: theme.color.buttonBackground,
      },
      backgroundColor: theme.color.buttonBackground,
      containerStyle: {
        borderBottomColor: 'transparent',
        borderBottomLeftRadius: hp(4),
        borderBottomRightRadius: hp(4),
        backgroundColor: theme.color.buttonBackground,
        height: hp(15),
      },
      sideContainerStyle: {
        marginHorizontal: wp(4),
        justifyContent: 'center',
      },
      centerContainerStyle: {
        justifyContent: 'center',
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <Header
      statusBarProps={props.statusbar ?? styles.statusBar}
      barStyle={props.barStyle ?? 'light-content'}
      placement={props.placement ?? 'center'}
      leftComponent={props.leftComponent}
      centerComponent={({allowFontScaling: false}, props.centerComponent)}
      rightComponent={props.rightComponent}
      backgroundColor={props.backgroundColor ?? styles.backgroundColor}
      containerStyle={[styles.containerStyle, props.containerStyle]}
      centerContainerStyle={[
        styles.centerContainerStyle,
        props.centerContainerStyle,
      ]}
      leftContainerStyle={[styles.sideContainerStyle, props.leftContainerStyle]}
      rightContainerStyle={[
        styles.sideContainerStyle,
        props.rightContainerStyle,
      ]}
    />
  );
}
export default RnHeader;
