/* eslint-disable prettier/prettier */
import {View, StyleSheet, TextInput, Image} from 'react-native';
import React from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const InputContainer = ({IMG, PLACEHOLDER}) => {
  return (
    <View style={styles.Container}>
      <Image
        style={{height: '35%', width: '8%'}}
        resizeMode="contain"
        source={IMG}
      />
      <TextInput
        placeholder={PLACEHOLDER}
        placeholderTextColor={'grey'}
        style={styles.InputContainerStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  InputContainerStyle: {
    width: '90%',
    backgroundColor: 'transparent',
    opacity: 1,
    // borderRadius: 25,
    paddingHorizontal: '7%',
    color: 'black',
  },
  Container: {
    flexDirection: 'row',
    width: '90%',
    marginVertical: responsiveHeight(1),
    height: responsiveHeight(6),
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    paddingHorizontal: '2%',
    alignItems: 'center',
    borderRadius: 36,
  },
});

export default InputContainer;
