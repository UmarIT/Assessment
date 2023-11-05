import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import Login from '../screen/Auth/Login';
import Signup from '../screen/Auth/Signup';
import Home from '../screen/Home';
import Profile from '../screen/Profile';

import {StyleSheet} from 'react-native';
import Text from '../components/CustomText';
import {useThemeAwareObject} from '../theme';
import {hp} from '../util';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const TabNavigator = props => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      tabBarColor: theme.color.appBackground,
      focusedColor: {
        color: theme.color.primaryColor,
      },
      grayColor: {
        color: theme.color.shadowColor,
      },
      textStyle: {
        fontSize: theme.size.xSmall,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: false,
      }}
      initialRouteName="HomeStack"
      backBehavior="firstRoute">
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();

            navigation.reset({
              index: 0,
              routes: [{name: 'HomeStack'}],
            });
          },
        })}
        options={({route}) => ({
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={focused ? '#43af8a' : '#CCC'}
              size={size}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.textStyle,
                focused ? styles.focusedColor : styles.grayColor,
              ]}>
              Home
            </Text>
          ),
          tabBarStyle: {
            backgroundColor: styles.tabBarColor,
            height: hp(8),
            paddingTop: hp(1),
            paddingBottom: hp(1),
            borderTopWidth: 0.5,
          },
          unmountOnBlur: true,
        })}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('ProfileStack', {
              screen: 'Profile',
            });
          },
        })}
        options={({route}) => ({
          tabBarIcon: ({size, focused}) => (
            <FontAwesome
              name={focused ? 'user' : 'user-o'}
              color={focused ? '#43af8a' : '#CCC'}
              size={size}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.textStyle,
                focused ? styles.focusedColor : styles.grayColor,
              ]}>
              Account
            </Text>
          ),
          tabBarStyle: {
            backgroundColor: styles.tabBarColor,
            height: hp(8),
            paddingTop: hp(1),
            paddingBottom: hp(1),
            borderTopWidth: 0.5,
          },
          unmountOnBlur: true,
        })}
      />
    </Tab.Navigator>
  );
};

const MainStack = () => {
  const user = useSelector(state => state.user);
  console.log('user------->', user);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{
          headerShown: false,
        }}>
        {user?.userfound ? (
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
