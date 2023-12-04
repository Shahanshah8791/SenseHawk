import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from './styles';
import Colors from '../../constants/Colors';
import {MenuProps, RestaurantProps} from './types';
import {vw} from '../../constants/Dimension';

export const RestaurantCard = ({
  restImage,
  restTitle,
  restRating,
  restDist,
  restLoc,
  onPressRest,
}: RestaurantProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressRest}
      style={styles.restaurantContainer}>
      <Image style={styles.restImage} source={restImage} />
      <View style={styles.restNameAndDistContainer}>
        <Text style={styles.text16600}>{restTitle}</Text>
        <View style={styles.ratingAndDistContainer}>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={10} color={Colors.color_FF9529} />
            <Text style={styles.text10500}> {restRating} | </Text>
          </View>

          <Text style={styles.text10500}>{restDist}</Text>
        </View>
        <Text style={styles.text12600}>{restLoc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const MenuCard = ({
  menuImage,
  menuTitle,
  addedCount,
  onPressAdd,
  onPressRemove,
  price,
}: MenuProps) => {
  return (
    <View style={styles.menuContainer}>
      <Image style={styles.restImage} source={menuImage} />
      <View style={styles.menuNameAndCountContainer}>
        <Text style={styles.text16600}>{menuTitle}</Text>
        <Text style={styles.text16600}>₹{price}</Text>
        <View style={styles.minusAndPlusContainer}>
          {!!addedCount && (
            <>
              <TouchableOpacity onPress={onPressRemove} activeOpacity={0.8}>
                <AntDesign
                  name="minuscircle"
                  size={vw(20)}
                  color={Colors.color_1BAC4B}
                />
              </TouchableOpacity>
              <Text style={styles.textAddedCount}>
                {'   '} {addedCount}
                {'   '}
              </Text>
            </>
          )}

          <TouchableOpacity onPress={onPressAdd} activeOpacity={0.8}>
            <AntDesign
              name="pluscircle"
              size={vw(20)}
              color={Colors.color_1BAC4B}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
