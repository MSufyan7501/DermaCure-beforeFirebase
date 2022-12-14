import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import RootNav from './src/navigation/RootNav';
import Disease from './src/screens/Disease';
const Splash = () => {
  return (
    <Image
      source={require('./src/assets/icons/background-image.png')}
      resizeMode={'stretch'}
      style={{flex: 1}}
    />
  );
};
const App = () => {
  // const [isLoad, setIsLoad] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoad(false);
  //   }, 2000);
  // }, []);

  // return isLoad ? <Splash /> : <RootNav />;
  return <Disease />;
};

export default App;

// const styles = StyleSheet.create({});
