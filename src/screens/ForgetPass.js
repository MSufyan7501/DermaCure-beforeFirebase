import {ImageBackground, Text, View} from 'react-native';
import React from 'react';
import Button from '../components/Buttton';
import InputContainer from '../components/InputContainer';
import {styles} from '../assets/helpers';
const icon = '../assets/icons/';
const DATA = [
  {img: require(icon + 'email-vector.png'), PLACEHOLDER: 'Email/Phone number'},
];

const ForgetPass = ({navigation}) => {
  return (
    <ImageBackground
      source={require(icon + 'background-image.png')}
      blurRadius={10}
      resizeMode={'stretch'}
      style={styles.MainView}>
      <View style={styles.MainBox}>
        <Text style={styles.MainText}>Forget Password</Text>

        {DATA.map((DATA, index) => {
          return (
            <InputContainer
              key={index}
              PLACEHOLDER={DATA.PLACEHOLDER}
              IMG={DATA.img}
            />
          );
        })}

        <Button ToScreen={'OTP'} navigation={navigation} TEXT={'Send OTP'} />
        <Text style={styles.Note}>
          Note:
          <Text style={{fontWeight: '400'}}>
            {' '}
            Write email or phone number to get code to reset your password.
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default ForgetPass;
