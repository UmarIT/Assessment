import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useDispatch, useSelector} from 'react-redux';
import Text from '../../components/CustomText';
import FormInput from '../../components/FormInput';
import Header from '../../components/Header';
import {useThemeAwareObject} from '../../theme/index';
import {hp} from '../../util/index';
import createStyles from './styles';
import {setUser, setUserLogin} from '../../redux/slices/userSlice';
const Profile = props => {
  const styles = useThemeAwareObject(createStyles);
  const user = useSelector(state => state.user.userData);

  const [edit, setEdit] = useState(false);
  const [profile_image, setProfileImage] = useState(null);
  const [fullname, setFullName] = useState(user?.fullname);
  const [phonenumber, setPhoneNumber] = useState(user?.phonenumber);
  const [email, setEmail] = useState(user?.email);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Header
        backgroundColor={styles.headerColor}
        statusbar={styles.headerColor}
        centerComponent={
          <Text style={styles.centerHeaderText}> Profile Details</Text>
        }
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              dispatch(setUserLogin(false));
            }}>
            <SimpleLineIcons name="logout" size={25} color={'#fff'} />
          </TouchableOpacity>
        }
      />

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginHorizontal: hp(4),
        }}>
        <FormInput
          editable={false}
          containerStyle={{marginTop: hp(10)}}
          star={fullname == '' ? true : false}
          input={fullname == '' ? styles.inputContainerStyle : null}
          inputStyle={styles.inputStyle}
          label="First Name"
          placeholder="Enter your full name "
          value={fullname}
          onChangeText={text => {
            setFullName(text);
          }}
          errorMsg={fullname == '' && <Text style={styles.errorStyle}></Text>}
          appendComponent={
            <View style={styles.imageView}>
              <FontAwesome name="user-o" size={20} color={'#000'} />
            </View>
          }
        />
        <FormInput
          editable={false}
          inputStyle={styles.inputStyle}
          star={phonenumber == '' ? true : false}
          input={phonenumber == '' ? styles.inputContainerStyle : null}
          label="Phone Number"
          placeholder="Enter your phone number "
          value={phonenumber}
          onChangeText={text => {
            setPhoneNumber(text);
          }}
          errorMsg={
            phonenumber == '' && <Text style={styles.errorStyle}></Text>
          }
          appendComponent={
            <View style={styles.imageView}>
              <FontAwesome name="phone" size={20} color={'#000'} />
            </View>
          }
        />

        <FormInput
          editable={false}
          inputStyle={styles.inputStyle}
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          placeholder="Enter your email address "
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
          errorMsg={
            email == '' && (
              <Text style={styles.errorStyle}> email is required</Text>
            )
          }
          appendComponent={
            <View style={styles.imageView}>
              <Fontisto name="email" size={20} color={'#000'} />
            </View>
          }
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Profile;
