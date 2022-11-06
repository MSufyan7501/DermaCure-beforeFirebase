import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  Alert,
} from 'react-native';
import React from 'react';
import Button from '../components/Buttton';
import InputContainer from '../components/InputContainer';
import {styles} from '../assets/helpers';
import * as yup from 'yup';
import firebase from '@react-native-firebase/app';
import {Formik} from 'formik';
const icon = '../assets/icons/';
const DATA = [
  {img: require(icon + 'user-vector.png'), PLACEHOLDER: 'Name'},
  {img: require(icon + 'email-vector.png'), PLACEHOLDER: 'Email'},
  {img: require(icon + 'vector-password.png'), PLACEHOLDER: 'Password'},
  {img: require(icon + 'vector-password.png'), PLACEHOLDER: 'Confirm Password'},
];

const OnRegisterPress = async (Email, Pass, navigation) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Pass)
      .then(() => {
        navigation.navigate('Login');
        ToastAndroid.showWithGravity(
          'Registered Successfully ',
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

const RegisterSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Please Enter a Valid Email Address')
    .required('valid Email is required'),
  password: yup
    .string()
    .min(8, 'Password should contain atleast 8 characters')
    .required('password is required'),
  confirm: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Password Must be same'),
});

const Register = ({navigation}) => {
  return (
    <ImageBackground
      source={require(icon + 'background-image.png')}
      blurRadius={10}
      resizeMode={'stretch'}
      style={[styles.MainView, {paddingTop: 100}]}>
      <View style={styles.MainBox}>
        <Text style={styles.MainText}>Register</Text>

        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            // console.log('Email', values.email);
            // console.log('Password', values.password);

            OnRegisterPress(values.email, values.password, navigation);
          }}
          validationSchema={RegisterSchema}
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
                errors={errors.name}
                handleChange={handleChange('name')}
                handleBlur={handleBlur('name')}
                PLACEHOLDER={DATA[0].PLACEHOLDER}
              />
              <InputContainer
                IMG={DATA[1].img}
                errors={errors.email}
                handleChange={handleChange('email')}
                handleBlur={handleBlur('email')}
                PLACEHOLDER={DATA[1].PLACEHOLDER}
              />
              <InputContainer
                IMG={DATA[2].img}
                PLACEHOLDER={DATA[2].PLACEHOLDER}
                handleChange={handleChange('password')}
                errors={errors.password}
                handleBlur={handleBlur('password')}
              />

              <InputContainer
                IMG={DATA[3].img}
                errors={errors.confirm}
                handleChange={handleChange('confirm')}
                handleBlur={handleBlur('confirm')}
                PLACEHOLDER={DATA[3].PLACEHOLDER}
              />
              <Button
                TEXT={'Regiser'}
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
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: '#ffff',
              fontSize: 14,
              alignSelf: 'flex-end',
              fontWeight: '600',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Register;
