import React from 'react';
import {SafeAreaView, Text, FlatList, View, Alert} from 'react-native';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../utils/Hooks/Hooks';
import {logout} from '../../actions/Auth';
import {RestaurantCard} from '../../components/cards';
import {HomeScreentNavigationType, RestaurantProps} from './types';
import {useNavigation} from '@react-navigation/native';
import Types from '../../constants/Types';
import {MenuHeader} from '../../components/header';

export const Home = () => {
  const dispatch = useAppDispatch();
  const {cartId, cart} = useAppSelector(state => state.cart);
  const navigation = useNavigation<HomeScreentNavigationType>();
  const data = [
    {
      image: require('../../assets/images/Restaurant/Restaurant.png'),
      title: 'BurgerKing',
      distance: '10.9 KM',
      rating: '3.9 (2.5k)',
      location: 'Delhi',
    },
    {
      image: require('../../assets/images/Restaurant/Restaurant.png'),
      title: 'Dominos',
      distance: '1.9 KM',
      rating: '4.1 (0.5k)',
      location: 'Delhi',
    },
    {
      image: require('../../assets/images/Restaurant/Restaurant.png'),
      title: 'Pizza Hut',
      distance: '3.1 KM',
      rating: '3.7 (5.5k)',
      location: 'Delhi',
    },
    {
      image: require('../../assets/images/Restaurant/Restaurant.png'),
      title: 'Behrouz Biryani',
      distance: '4.9 KM',
      rating: '4.0 (1.2k)',
      location: 'Delhi',
    },
    {
      image: require('../../assets/images/Restaurant/Restaurant.png'),
      title: 'Roll & Ramen',
      distance: '7.7 KM',
      rating: '3.1 (0.2k)',
      location: 'Delhi',
    },
    {
      image: require('../../assets/images/Restaurant/Restaurant.png'),
      title: 'Indo Chinese',
      distance: '8.1 KM',
      rating: '3.5 (1.8k)',
      location: 'Delhi',
    },
    {
      image: require('../../assets/images/Restaurant/Restaurant.png'),
      title: 'KFC',
      distance: '500 M',
      rating: '3.9 (4.5k)',
      location: 'Delhi',
    },
    {
      image: require('../../assets/images/Restaurant/Restaurant.png'),
      title: 'Wow momo',
      distance: '1.9 KM',
      rating: '3.9 (0.8k)',
      location: 'Delhi',
    },
  ];
  const renderRestaurant = ({item}: {item: RestaurantProps}) => {
    return (
      <RestaurantCard
        restImage={item.image}
        restRating={item.rating}
        restTitle={item.title}
        restDist={item.distance}
        restLoc={item.location}
        onPressRest={() => {
          handleNavigateToMenu(item);
        }}
      />
    );
  };
  const handleNavigateToMenu = (rest: RestaurantProps) => {
    const tempCartId = `${rest.title}-${rest.location}`;
    if (tempCartId === cartId || cartId === null || cart.length === 0) {
      navigateToRest(rest);
    } else {
      Alert.alert(
        'SenseHawk',
        `You have cart for ${cartId}. Do you want to clear the cart.`,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
          {
            text: 'OK',
            onPress: () => {
              dispatch({
                type: Types.UPDATE_CART,
                cartId: null,
                cart: [],
              });
              navigateToRest(rest);
            },
          },
        ],
      );
    }
  };
  const navigateToRest = (rest: RestaurantProps) => {
    navigation.navigate('Menu', {
      image: rest.image,
      distance: rest.distance,
      location: rest.location,
      rating: rest.rating,
      title: rest.title,
    });
  };
  const renderItemSeperator = () => {
    return <View style={styles.seperator} />;
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dataContainer}>
        <View style={styles.headerContainer}>
          <MenuHeader onPress={handleLogout} />
        </View>
        <View style={styles.restListContainer}>
          <FlatList
            data={data}
            renderItem={renderRestaurant}
            ItemSeparatorComponent={renderItemSeperator}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
