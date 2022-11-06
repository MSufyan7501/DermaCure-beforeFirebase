import {Image, ImageBackground, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../assets/helpers';
import Button from '../components/Buttton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const icon = '../assets/icons/';

const Disease = ({navigation}) => {
  const [imgUri, setimgUri] = useState(null);
  const choosePhoto = () => {
    const option = {noData: true};
    launchImageLibrary(option, response => {
      setimgUri(response.assets[0].uri);
    });
  };

  const takePhoto = () => {
    const option = {};
    launchCamera(option, response => {
      setimgUri(response.assets[0].uri);
    });
  };
  return (
    <ImageBackground
      source={require(icon + 'background-image.png')}
      blurRadius={10}
      resizeMode={'stretch'}
      style={[styles.MainView]}>
      <View style={styles.MainBox}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Button TEXT={'Upload Photo'} onPress={choosePhoto} />
          <Button TEXT={'Take Photo'} onPress={takePhoto} />
        </View>
        {imgUri && (
          <Image
            resizeMode="stretch"
            style={{
              height: responsiveHeight(50),
              width: '90%',
            }}
            source={{uri: imgUri}}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default Disease;
