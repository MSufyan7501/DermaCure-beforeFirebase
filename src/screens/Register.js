import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Button from '../components/Buttton';
import InputContainer from '../components/InputContainer';
import {styles} from '../assets/helpers';
const icon = '../assets/icons/';
const DATA = [
  {img: require(icon + 'user-vector.png'), PLACEHOLDER: 'Name'},
  {img: require(icon + 'email-vector.png'), PLACEHOLDER: 'Phone Number'},
  {img: require(icon + 'vector-password.png'), PLACEHOLDER: 'Password'},
  {img: require(icon + 'vector-password.png'), PLACEHOLDER: 'Confirm Password'},
];

const Register = ({navigation}) => {
  return (
    <ImageBackground
      source={require(icon + 'background-image.png')}
      blurRadius={10}
      resizeMode={'stretch'}
      style={[styles.MainView, {paddingTop: 100}]}>
      <View style={styles.MainBox}>
        <Text style={styles.MainText}>Register</Text>
        <InputContainer IMG={DATA[0].img} PLACEHOLDER={DATA[0].PLACEHOLDER} />
        <InputContainer IMG={DATA[1].img} PLACEHOLDER={DATA[1].PLACEHOLDER} />
        <InputContainer IMG={DATA[2].img} PLACEHOLDER={DATA[2].PLACEHOLDER} />
        <InputContainer IMG={DATA[3].img} PLACEHOLDER={DATA[3].PLACEHOLDER} />
        <Button TEXT={'Register'} ToScreen={'Login'} navigation={navigation} />
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
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: '#ffff',
              fontSize: 14,
              alignSelf: 'flex-end',
              fontWeight: '600',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Register;
