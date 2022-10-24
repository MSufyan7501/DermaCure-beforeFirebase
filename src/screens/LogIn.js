/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  View,
  TextInput,
} from 'react-native';
import React from 'react';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import InputContainer from '../components/InputContainer';
import Button from '../components/Buttton';
// import InputConponent from '../../components/InputConponent';
// import FormButton from '../../components/FormButton';

const LogIn = ({navigation}) => {
  const assets = '../assets/icons/';
  const DATA = [
    {img: require(assets + 'email-vector.png'), PLACEHOLDER: 'Email'},
    {
      img: require(assets + 'vector-password.png'),
      PLACEHOLDER: 'Password',
    },
  ];
  return (
    <ImageBackground
      source={require(assets + 'background-image.png')}
      blurRadius={10}
      style={styles.MainView}>
      {/* <KeyboardAvoidingView> */}
      {/* <ScrollView> */}
      <View style={{paddingVertical: '13%'}}></View>

      <View
        style={{
          width: '78%',
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: 26,
          paddingVertical: '3%',
          alignItems: 'center',
          marginTop: '0%',
        }}>
        <Text
          style={{
            fontSize: 24,
            paddingVertical: '3%',
            fontWeight: '700',
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
          //   onPress={() => navigation.navigate('ForgotPassword')}
          onPress={() => console.log('forget password')}
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

      <View
        style={{
          flexDirection: 'row',
          height: '5%',
          backgroundColor: 'white',
          width: '75%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 50,
        }}>
        <Image
          style={{height: '60%', width: '40%'}}
          resizeMode="contain"
          source={require(assets + 'fb-vector.png')}
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
          source={require(assets + 'google-vector.png')}
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
        <TouchableOpacity
          //   onPress={() => navigation.navigate('Register')}
          onPress={() => console.log('Register')}>
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

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default LogIn;
