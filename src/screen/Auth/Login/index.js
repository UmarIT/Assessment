import {Formik} from 'formik';

import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import Button from '../../../components/Button';
import Text from '../../../components/CustomText';
import FormInput from '../../../components/FormInput';
import {usePostApiMutation} from '../../../services/service';
import {useThemeAwareObject} from '../../../theme/index';
import {hp} from '../../../util';
import createStyles from './styles';
import {setUserLogin} from '../../../redux/slices/userSlice';
import SnackBar from '../../../components/SnackBar';
const Login = props => {
  const dispatch = useDispatch();

  const [loginApi, loginApiResponse] = usePostApiMutation();
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);
  const styles = useThemeAwareObject(createStyles);
  const [passwordIcon, setPasswordIcon] = useState(true);
  const userData = useSelector(state => state.user.userData);
  console.log('userData', userData);
  const minPass = 8;
  const validationSchema = yup.object().shape({
    email: yup
      .string('Email Required')
      .email()
      .label('Email')
      .required('Required'),
    password: yup
      .string('Password Required')
      .label('Password')
      .required('Required'),
  });

  function PasswordRightIcon() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setPasswordIcon(!passwordIcon);
        }}>
        {icon()}
      </TouchableOpacity>
    );
  }
  function icon() {
    if (passwordIcon) {
      return <Feather name={'eye-off'} size={20} color={'#aaa'} />;
    } else {
      return <Feather name={'eye'} size={20} color={'#aaa'} />;
    }
  }

  const loginApiCalling = async values => {
    let dataCall = {
      email: values.email,
      password: values.password,
    };
    if (
      userData.email == dataCall.email &&
      userData.password == dataCall.password
    ) {
      console.log('1');
      dispatch(setUserLogin(true));
    } else {
      SnackBar('incorrect email or password', true);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <StatusBar
          backgroundColor={styles.bgStatusBar}
          barStyle="dark-content"
        />
        <Image
          source={require('../../../assets/png/logo.jpeg')}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <Formik
          initialValues={{email: '', password: ''}}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={values => {
            loginApiCalling(values);
          }}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, handleBlur, errors, values}) => (
            <>
              <View>
                <FormInput
                  containerStyle={{marginTop: hp(5)}}
                  inputStyle={styles.inputStyle}
                  label="Email"
                  // star={errors.email ? true : false}
                  input={errors.email ? styles.inputContainerStyle : null}
                  keyboardType="email-address"
                  autoCompleteType="email"
                  placeholder="Enter your email address "
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  errorMsg={errors.email}
                  appendComponent={
                    <View style={styles.imageView}>
                      <Fontisto name="email" size={20} color={'#aaa'} />
                    </View>
                  }
                />
                <FormInput
                  inputStyle={styles.inputStyle}
                  label="Password"
                  // star={errors.password ? true : false}
                  input={errors.password ? styles.inputContainerStyle : null}
                  placeholder="Enter password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  errorMsg={errors.password}
                  secureTextEntry={passwordIcon}
                  appendComponent={
                    <View style={styles.imageView}>{PasswordRightIcon()}</View>
                  }
                />
                <Button
                  style={[styles.loginContainer]}
                  title1="Log In"
                  onPress={() => handleSubmit()}
                  loading={loginApiResponse.isLoading}
                />
              </View>
              <View style={styles.doNotHaveAccountView}>
                <Text style={styles.textAnAccount}>
                  Don’t have an account?{' '}
                </Text>
                <Text
                  onPress={() => {
                    props.navigation.replace('Signup');
                  }}
                  style={styles.signUp}>
                  Signup
                </Text>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
