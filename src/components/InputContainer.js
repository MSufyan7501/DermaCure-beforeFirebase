import {View, StyleSheet, TextInput, Image} from 'react-native';
import React from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const InputContainer = ({IMG, PLACEHOLDER}) => {
  return (
    <View style={styles.Container}>
      <Image
        style={{
          height: '35%',
          width: '8%',
        }}
        resizeMode="contain"
        source={IMG}
      />
      <TextInput
        style={styles.InputContainerStyle}
        placeholder={PLACEHOLDER}
        placeholderTextColor={'grey'}
        secureTextEntry={
          PLACEHOLDER === 'Password' || PLACEHOLDER === 'Confirm Password'
            ? true
            : false
        }
        autoCapitalize="none"
        autoCorrect={false}
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
};

const styles = StyleSheet.create({
  InputContainerStyle: {
    width: '90%',
    backgroundColor: 'transparent',
    opacity: 1,
    marginLeft: '7%',
    color: 'black',
  },

  Container: {
    flexDirection: 'row',
    width: '90%',
    marginVertical: 9,
    height: responsiveHeight(6),
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    paddingHorizontal: '8%',
    alignItems: 'center',
    borderRadius: responsiveHeight(6) / 2,
  },
});

export default InputContainer;
