import {StyleSheet} from 'react-native';
import {hp, wp} from '../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return styles;
};
export default createStyles;
