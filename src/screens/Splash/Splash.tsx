/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {SafeAreaView, Image, View} from 'react-native';
import {styles} from './styles';
import {useAppDispatch} from '../../utils/Hooks/Hooks';
import {checkIfUserAlreadyLoggedInFromFirebase} from '../../actions/Auth';

export const Splash = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(checkIfUserAlreadyLoggedInFromFirebase());
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dataContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/Logo/Logo.png')}
        />
      </View>
    </SafeAreaView>
  );
};
