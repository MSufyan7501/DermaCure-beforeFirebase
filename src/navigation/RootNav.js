/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from '../screens/LogIn';
import Disease from '../screens/Disease';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();
const RootNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Disease" component={Disease} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>RootNav</Text>
    // </View>
  );
};

export default RootNav;

const styles = StyleSheet.create({});