import React from 'react';
import {ActivityIndicator} from 'react-native';
import {LoaderProps} from './types';

export const Loader = ({
  size = 'small',
  color = 'color_FFFFFF',
}: LoaderProps) => {
  return <ActivityIndicator color={color} size={size} />;
};
