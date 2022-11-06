import {
  Image,
  Text,
  TouchableOpacity,
  // ScrollView,
  ImageBackground,
  // KeyboardAvoidingView,
  View,
  Alert,
  ToastAndroid,
  // TextInput,
} from 'react-native';
import React from 'react';
import {styles} from '../assets/helpers';
import * as yup from 'yup';
import firebase from '@react-native-firebase/app';
import {Formik} from 'formik';
import InputContainer from '../components/InputContainer';
import Button from '../components/Buttton';

const LogInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please Enter a Valid Email Address')
    .required('valid Email is required'),
  password: yup
    .string()
    .min(8, 'Password should contain atleast 8 characters')
    .required('password is required'),
});

const OnLogInPress = async (Email, Pass, navigation) => {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(Email, Pass)
      .then(() => {
        navigation.navigate('Disease');
        ToastAndroid.showWithGravity(
          'Logged In Successfully ',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        //move to home
      });
  } catch (error) {
    Alert.alert(
      'Error!!',
      error.message + '\n\n What do you want to do next?',
      [
        {
          text: 'OK',
          style: 'cancel',
          onPress: () => {
            console.log('ok');
          },
        },
        {
          text: 'Register',
          onPress: () => {
            navigation.push('Register');
          },
        },
      ],
    );
  }
};

const LogIn = ({navigation}) => {
  const icon = '../assets/icons/';
  const DATA = [
    {img: require(icon + 'email-vector.png'), PLACEHOLDER: 'Email'},
    {
      img: require(icon + 'vector-password.png'),
      PLACEHOLDER: 'Password',
    },
  ];
  return (
    <ImageBackground
      source={require(icon + 'background-image.png')}
      blurRadius={10}
      resizeMode={'stretch'}
      style={styles.MainView}>
      <View style={{paddingVertical: '13%'}} />

      <View style={styles.MainBox}>
        <Text style={styles.MainText}>Login</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            // console.log('Email', values.email);
            // console.log('Password', values.password);

            OnLogInPress(values.email, values.password, navigation);
          }}
          validationSchema={LogInSchema}
          validateOnMount={true}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            values,
            isValid,
          }) => (
            <>
              <InputContainer
                IMG={DATA[0].img}
                errors={errors.email}
                handleChange={handleChange('email')}
                handleBlur={handleBlur('email')}
                PLACEHOLDER={DATA[0].PLACEHOLDER}
              />
              <InputContainer
                IMG={DATA[1].img}
                PLACEHOLDER={DATA[1].PLACEHOLDER}
                handleChange={handleChange('password')}
                errors={errors.password}
                handleBlur={handleBlur('password')}
              />

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
              <Button
                TEXT={'LogIn'}
                DISABLE={!isValid}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
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
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              color: '#ffff',
              fontSize: 14,
              alignSelf: 'flex-end',
              fontWeight: '600',
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
      {/* </KeyboardAvoidingView> */}
    </ImageBackground>
  );
};

export default LogIn;
