import {
  Image,
  Text,
  TouchableOpacity,
  // ScrollView,
  ImageBackground,
  // KeyboardAvoidingView,
  View,
  // TextInput,
} from 'react-native';
import React from 'react';

// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
import InputContainer from '../components/InputContainer';
import Button from '../components/Buttton';
import {styles} from '../assets/helpers';
import {responsiveHeight} from 'react-native-responsive-dimensions';

// import InputConponent from '../../components/InputConponent';
// import FormButton from '../../components/FormButton';

const LogIn = ({navigation}) => {
  const icon = '../assets/icons/';
  const DATA = [
    {img: require(icon + 'email-vector.png'), PLACEHOLDER: 'Email'},
    {
      img: require(icon + 'vector-password.png'),
      PLACEHOLDER: 'Password',
    },
  ];
  return (
    <ImageBackground
      source={require(icon + 'background-image.png')}
      blurRadius={10}
      resizeMode={'stretch'}
      style={styles.MainView}>
      {/* <KeyboardAvoidingView> */}
      {/* <ScrollView> */}
      <View style={{paddingVertical: '13%'}} />

      {/* grey blurr box */}
      <View
        style={{
          width: '87%',
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: 26,
          paddingVertical: '3%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 24,
            paddingVertical: '3%',
            fontWeight: '800',
            fontStyle: 'italic',
            color: '#376FCC',
          }}>
          Login
        </Text>

        {DATA.map((DATA, index) => {
          return (
            <InputContainer
              key={index}
              PLACEHOLDER={DATA.PLACEHOLDER}
              IMG={DATA.img}
            />
          );
        })}
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgetPass')}
          // onPress={() => console.log('forget password')}
          style={{
            marginHorizontal: '10%',
            padding: '1%',
            alignSelf: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
            }}>
            Forget Password?
          </Text>
        </TouchableOpacity>
        <Button ToScreen={'Disease'} navigation={navigation} TEXT={'Login'} />
      </View>

      <Text
        style={{
          marginVertical: '1%',
          alignSelf: 'center',
          fontWeight: '400',
          fontSize: 17,
          color: 'white',
        }}>
        OR
      </Text>

      <View style={styles.FbGoogleBox}>
        <Image
          style={{height: '60%', width: '40%'}}
          resizeMode="contain"
          source={require(icon + 'fb-vector.png')}
        />
        <View
          style={{
            height: '60%',
            opacity: 0.1,
            borderWidth: 1,
            borderColor: 'black',
          }}
        />
        <Image
          style={{height: '60%', width: '40%'}}
          resizeMode="contain"
          source={require(icon + 'google-vector.png')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: '2%',
          alignSelf: 'center',
        }}>
        <Text style={{color: '#376FCC', fontWeight: '400', fontSize: 14}}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              color: '#ffff',
              fontSize: 14,
              alignSelf: 'flex-end',
              fontWeight: '600',
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
      {/* </KeyboardAvoidingView> */}
    </ImageBackground>
  );
};

export default LogIn;
