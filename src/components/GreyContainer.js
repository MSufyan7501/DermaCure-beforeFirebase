import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {styles} from '../assets/helpers';
import {Formik} from 'formik';

const GreyContainer = ({
  yupSchema,
  PLACEHOLDER,
  ForgotPass,
  DISABLE,
  DATA,
  navigation,
  TEXT,
  Note,
  ToScreen,
  MainText,
}) => {
  return (
    <View style={styles.MainBox}>
      <Text style={styles.MainText}>{MainText}</Text>
      <Formik></Formik>
      {DATA.map((DATA, index) => {
        return (
          <View style={styles.Container}>
            <Image
              style={{
                height: '35%',
                width: '8%',
              }}
              resizeMode="contain"
              source={DATA.img}
            />
            <TextInput
              style={styles.InputContainerStyle}
              placeholder={DATA.PLACEHOLDER}
              placeholderTextColor={'grey'}
              secureTextEntry={
                DATA.PLACEHOLDER === 'Password' ||
                DATA.PLACEHOLDER === 'Confirm Password'
                  ? true
                  : false
              }
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={val => console.log(val)}
              keyboardType={
                PLACEHOLDER === 'Phone Number'
                  ? 'phone-pad'
                  : PLACEHOLDER === 'Email'
                  ? 'email-address'
                  : 'default'
              }
            />
          </View>
        );
      })}
      {ForgotPass ? (
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
      ) : null}
      <TouchableOpacity
        onPress={() => navigation.navigate(ToScreen)}
        // disabled={DISABLE}
        style={{
          height: responsiveHeight(5.5),
          width: responsiveWidth(38),
          backgroundColor: DISABLE ? 'grey' : '#376FCC',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          marginVertical: responsiveHeight(2),
        }}>
        <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '700'}}>
          {TEXT}
        </Text>
      </TouchableOpacity>
      {Note ? (
        <Text style={styles.Note}>
          Note:
          <Text style={{fontWeight: '400'}}> {Note}</Text>
        </Text>
      ) : null}
    </View>
  );
};

export default GreyContainer;
