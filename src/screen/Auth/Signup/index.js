import {Formik} from 'formik';

import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../../../components/CustomText';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import Button from '../../../components/Button';
import FormInput from '../../../components/FormInput';
import {useThemeAwareObject} from '../../../theme/index';
import {hp} from '../../../util';
import createStyles from './styles';
import {setUser, setUserSignUp} from '../../../redux/slices/userSlice';
const Signup = props => {
  const dispatch = useDispatch();

  const styles = useThemeAwareObject(createStyles);
  const [passwordIcon, setPasswordIcon] = useState(true);

  const minPass = 8;
  const validationSchema = yup.object().shape({
    email: yup
      .string('Email Required')
      .email()
      .label('Email')
      .required('Required'),
    fullname: yup
      .string('fullname Required')
      .label('fullname')
      .required('Required'),
    phonenumber: yup
      .string('phonenumber Required')
      .label('phonenumber')
      .label('phonenumber')
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

  const signUpApiCalling = async values => {
    let dataCall = {
      email: values.email,
      phonenumber: values.phonenumber,
      fullname: values.fullname,
      password: values.password,
    };
    dispatch(setUserSignUp(dataCall));
    props.navigation.navigate('Login');

    console.log('dataCall', dataCall);
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
          initialValues={{
            email: '',
            password: '',
            fullname: '',
            phonenumber: '',
          }}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={values => {
            signUpApiCalling(values);
          }}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, handleBlur, errors, values}) => (
            <>
              <View>
                <FormInput
                  containerStyle={{marginTop: hp(5)}}
                  inputStyle={styles.inputStyle}
                  label="Full Name"
                  input={errors.fullname ? styles.inputContainerStyle : null}
                  placeholder="Enter your full name "
                  value={values.fullname}
                  onChangeText={handleChange('fullname')}
                  onBlur={handleBlur('fullname')}
                  errorMsg={errors.fullname}
                  appendComponent={
                    <View style={styles.imageView}>
                      <FontAwesome6 name="user" size={20} color={'#aaa'} />
                    </View>
                  }
                />
                <FormInput
                  //   containerStyle={{marginTop: hp(5)}}
                  inputStyle={styles.inputStyle}
                  label="Phone Number"
                  input={errors.phonenumber ? styles.inputContainerStyle : null}
                  placeholder="Enter your full name "
                  keyboardType="numeric"
                  value={values.phonenumber}
                  maxLength={11}
                  onChangeText={handleChange('phonenumber')}
                  onBlur={handleBlur('phonenumber')}
                  errorMsg={errors.phonenumber}
                  appendComponent={
                    <View style={styles.imageView}>
                      <Fontisto name="phone" size={20} color={'#aaa'} />
                    </View>
                  }
                />
                <FormInput
                  //   containerStyle={{marginTop: hp(5)}}
                  inputStyle={styles.inputStyle}
                  label="Email"
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
                  title1="Sign Up"
                  onPress={() => handleSubmit()}
                  //   loading={loginApiResponse.isLoading}
                />
              </View>
              <View style={styles.doNotHaveAccountView}>
                <Text style={styles.textAnAccount}>
                  Already have an account?{' '}
                </Text>
                <Text
                  onPress={() => {
                    props.navigation.replace('Login');
                  }}
                  style={styles.signUp}>
                  Login
                </Text>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Signup;
