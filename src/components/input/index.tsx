/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';
import Colors from '../../constants/Colors';
import {TextInputProps} from './types';
import {vh, vw} from '../../constants/Dimension';

export const Input = ({
  onChangeText,
  value,
  placeholder,
  placeholderTextColor = Colors.color_78828A,
  keyboardType,
  returnKeyType,
  helperText,
  isSecure,
  showSecure,
  onEyepress,
  errorText,
  editable,
}: TextInputProps) => {
  return (
    <>
      {helperText && <Text style={styles.text14500}>{helperText}</Text>}

      <View
        style={[
          styles.inputContainer,
          {
            marginTop: helperText ? vh(8) : 0,
          },
        ]}>
        <TextInput
          onChangeText={onChangeText}
          style={[
            styles.input,
            {
              width: showSecure ? '90%' : '100%',
            },
          ]}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          secureTextEntry={isSecure}
          caretHidden={false}
          editable={editable}
          autoCapitalize="none"
        />
        {showSecure && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onEyepress}
            style={styles.secureButton}>
            <Ionicons
              name={isSecure ? 'eye' : 'eye-off'}
              size={vw(20)}
              color={Colors.color_111111}
            />
          </TouchableOpacity>
        )}
      </View>
      {!!errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};
