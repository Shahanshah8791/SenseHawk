import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import Colors from '../../constants/Colors';
import {styles} from './styles';
import {ButtonProps} from './types';
import {Loader} from '../loader/Loader';

export const Button = ({
  title,
  onPress,
  textColor = Colors.color_FFFFFF,
  disabled,
  isLoading,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[styles.primaryButtonContainer]}>
      {isLoading ? (
        <Loader />
      ) : (
        <Text style={[styles.text16600, {color: textColor}]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
