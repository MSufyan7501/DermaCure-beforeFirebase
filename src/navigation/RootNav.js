import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from '../screens/LogIn';
import Disease from '../screens/Disease';
import ForgetPass from '../screens/ForgetPass';
import OTP from '../screens/OTP';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();
const RootNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Disease" component={Disease} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
