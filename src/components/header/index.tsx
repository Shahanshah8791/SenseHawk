import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../constants/Colors';
import {styles} from './styles';
import {HeaderProps} from './types';
import {vw} from '../../constants/Dimension';

export const Header = ({onPress, title, showLeft}: HeaderProps) => {
  return (
    <View style={styles.container}>
      {showLeft && (
        <AntDesign
          name="arrowleft"
          size={20}
          color={Colors.color_111111}
          onPress={onPress}
        />
      )}

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

export const MenuHeader = ({onPress}: {onPress?: () => void}) => {
  return (
    <View style={styles.menuHeadeContainer}>
      <Image
        style={styles.logoImage}
        source={require('../../assets/images/LogoOnly/LogoOnly.png')}
      />
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name="logout" size={vw(50)} />
      </TouchableOpacity>
    </View>
  );
};
