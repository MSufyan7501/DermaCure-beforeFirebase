import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from '../assets/helpers';
import Button from '../components/Buttton';
import {responsiveHeight} from 'react-native-responsive-dimensions';

// const DATA = [
//   {
//     img: require('../assets/icons/email-vector.png'),
//     PLACEHOLDER: 'Email/Phone number',
//   },
// ];
const icon = '../assets/icons/';

const DATA = [{value: ''}, {value: ''}, {value: ''}, {value: ''}];

const OTP = ({navigation}) => {
  return (
    <ImageBackground
      source={require(icon + 'background-image.png')}
      blurRadius={10}
      resizeMode={'stretch'}
      style={styles.MainView}>
      <View style={styles.MainBox}>
        <Text style={styles.MainText}>Forget Password</Text>
        <View
          style={{
            flexDirection: 'row',
            height: responsiveHeight(8),
            width: '70%',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          {DATA.map((DATA, index) => {
            return (
              <View
                style={{
                  height: '90%',
                  width: '20%',
                  backgroundColor: 'white',
                  borderRadius: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: '600',
                    color: 'black',
                  }}
                />
              </View>
            );
          })}
        </View>
        <Button
          ToScreen={'Login'}
          navigation={navigation}
          TEXT={'Verify OTP'}
        />
        <Text style={styles.Note}>
          Note:
          <Text style={{fontWeight: '400'}}>
            {' '}
            Write Write OTP Sent to your Phone Number
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default OTP;
