import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as EmailValidator from 'email-validator';

import {Input} from '../../components/input';
import {Button} from '../../components/button';
import {styles} from './styles';
import {Header} from '../../components/header';
import {login} from '../../actions/Auth';
import {useAppDispatch} from '../../utils/Hooks/Hooks';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    setLoading(true);
    if (email.length === 0) {
      setEmailError('Please enter email');
      setLoading(false);
      return;
    }
    if (!EmailValidator.validate(email.toLowerCase())) {
      setEmailError('Please enter valid email.');
      setLoading(false);
      return;
    }
    if (password.length === 0) {
      setPasswordError('Please enter password.');
      setLoading(false);
      return;
    }
    dispatch(
      login(email, password, () => {
        setLoading(false);
        setPasswordError(
          'Unable to login. Please check your email and password.',
        );
      }),
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.dataContainer}>
        <View style={styles.headerContainer}>
          <Header title="Login" />
        </View>

        <View style={styles.emailContainer}>
          <Input
            placeholder="Enter your email address"
            keyboardType={'email-address'}
            helperText={'Email'}
            editable={!loading}
            errorText={emailError}
            onChangeText={(emailText: string) => {
              setEmail(emailText);
              setEmailError('');
            }}
          />
        </View>
        <View style={styles.passwordContainer}>
          <Input
            placeholder="Enter your password"
            showSecure
            isSecure={!showPassword}
            helperText={'Password'}
            editable={!loading}
            errorText={passwordError}
            onChangeText={(paswordText: string) => {
              setPassword(paswordText);
              setPasswordError('');
            }}
            onEyepress={() => {
              setShowPassword(!showPassword);
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title={'Login'}
            isLoading={loading}
            disabled={loading}
            onPress={handleLogin}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
