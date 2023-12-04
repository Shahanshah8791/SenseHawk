/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useMemo, useEffect} from 'react';
import {SafeAreaView, Text, View, SectionList} from 'react-native';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../utils/Hooks/Hooks';
import {MenuCard} from '../../components/cards';
import {
  CartMenuItemProps,
  MenuHeaderProps,
  MenuItemProps,
  MenuScreenRouteType,
  MenuScreentNavigationType,
  Section,
} from './types';
import {Header} from '../../components/header';
import {useRoute, useNavigation, useIsFocused} from '@react-navigation/native';
import {Button} from '../../components/button';
import Types from '../../constants/Types';

export const Menu = () => {
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(state => state.cart);
  const navigation = useNavigation<MenuScreentNavigationType>();
  const route = useRoute<MenuScreenRouteType>();
  const isFocused = useIsFocused();
  useEffect(() => {
    if (cart.length > 0) {
      handleSyncCountChangeInCart();
    } else {
      setMenus([...initialMenus]);
    }
  }, [isFocused]);

  const handleSyncCountChangeInCart = () => {
    cart.forEach((item: CartMenuItemProps) => {
      const cuisineTitle = item.cuisineTitle;
      let tempMenus = [...menus];
      const cuisineIndex = tempMenus.findIndex(
        menuData => menuData.title === cuisineTitle,
      );
      const menusData = tempMenus[cuisineIndex].data;
      const menusIndex = menusData.findIndex(
        menusItem => menusItem.id === item.id,
      );
      menusData[menusIndex].addedCount = item.addedCount;
      tempMenus[cuisineIndex].data = menusData;

      setMenus([...tempMenus]);
    });
  };

  const [menus, setMenus] = useState([
    {
      title: 'Main dishes',
      data: [
        {
          name: 'Pizza',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 100,
          id: '1',
        },
        {
          name: 'Burger',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 90,
          id: '2',
        },
        {
          name: 'Risotto',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 100,
          id: '3',
        },
      ],
    },
    {
      title: 'Sides',
      data: [
        {
          name: 'French Fries',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 80,
          id: '4',
        },
        {
          name: 'Onion Rings',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 10,
          id: '5',
        },
        {
          name: 'Fried Shrimps',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 50,
          id: '6',
        },
      ],
    },
    {
      title: 'Drinks',
      data: [
        {
          name: 'Water',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 10,
          id: '7',
        },
        {
          name: 'Coke',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 35,
          id: '8',
        },
        {
          name: 'Beer',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 98,
          id: '9',
        },
      ],
    },
    {
      title: 'Desserts',
      data: [
        {
          name: 'Cheese Cake',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 85,
          id: '10',
        },
        {
          name: 'Ice Cream',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 60,
          id: '11',
        },
        {
          name: 'Fruit Cake',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 55,
          id: '12',
        },
      ],
    },
  ]);
  const initialMenus = [
    {
      title: 'Main dishes',
      data: [
        {
          name: 'Pizza',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 100,
          id: '1',
        },
        {
          name: 'Burger',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 90,
          id: '2',
        },
        {
          name: 'Risotto',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 100,
          id: '3',
        },
      ],
    },
    {
      title: 'Sides',
      data: [
        {
          name: 'French Fries',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 80,
          id: '4',
        },
        {
          name: 'Onion Rings',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 10,
          id: '5',
        },
        {
          name: 'Fried Shrimps',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 50,
          id: '6',
        },
      ],
    },
    {
      title: 'Drinks',
      data: [
        {
          name: 'Water',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 10,
          id: '7',
        },
        {
          name: 'Coke',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 35,
          id: '8',
        },
        {
          name: 'Beer',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 98,
          id: '9',
        },
      ],
    },
    {
      title: 'Desserts',
      data: [
        {
          name: 'Cheese Cake',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 85,
          id: '10',
        },
        {
          name: 'Ice Cream',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 60,
          id: '11',
        },
        {
          name: 'Fruit Cake',
          addedCount: 0,
          image: require('../../assets/images/Restaurant/Restaurant.png'),
          price: 55,
          id: '12',
        },
      ],
    },
  ];
  const handleSelectedMenu = (menuList: Section[]) => {
    const tempMenus: CartMenuItemProps[] = [];
    menuList.forEach((item: Section) => {
      item.data.forEach((menusItem: MenuItemProps) => {
        if (menusItem.addedCount > 0) {
          tempMenus.push({...menusItem, cuisineTitle: item.title});
        }
      });
    });
    return tempMenus;
  };
  const selectedMenu = useMemo(() => handleSelectedMenu(menus), [menus]);

  console.log({selectedMenu});
  const renderMenus = ({
    item,
    section,
    index,
  }: {
    item: MenuItemProps;
    section: any;
    index: number;
  }) => {
    return (
      <MenuCard
        menuImage={item.image}
        menuTitle={item.name}
        addedCount={item.addedCount}
        price={item.price}
        onPressAdd={() => {
          handleAddMinusMenu(section.title, index, true);
        }}
        onPressRemove={() => {
          handleAddMinusMenu(section.title, index, false);
        }}
      />
    );
  };
  const handleAddMinusMenu = (
    cuisineTitle: string,
    menuIndex: number,
    increment: boolean,
  ) => {
    let currentMenus = [...menus];
    const modifyingCuisineIndex = currentMenus.findIndex(
      item => item.title === cuisineTitle,
    );
    let modifyingCuisineMenu = currentMenus[modifyingCuisineIndex].data;
    modifyingCuisineMenu[menuIndex].addedCount = increment
      ? modifyingCuisineMenu[menuIndex].addedCount + 1
      : modifyingCuisineMenu[menuIndex].addedCount - 1;

    currentMenus[modifyingCuisineIndex].data = modifyingCuisineMenu;

    setMenus([...currentMenus]);
  };
  const renderMenuHeader = ({section: {title}}: MenuHeaderProps) => {
    return (
      <View style={styles.menuHeaderContainer}>
        <Text style={styles.menuHeaderText}>{title}</Text>
      </View>
    );
  };
  const renderItemSeperator = () => {
    return <View style={styles.seperator} />;
  };

  const handleNavigateToCart = () => {
    dispatch({
      type: Types.UPDATE_CART,
      cartId: `${route.params.title}-${route.params.location}`,
      cart: selectedMenu,
    });
    navigation.navigate('Cart', {cart: selectedMenu});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dataContainer}>
        <View>
          <Header
            title={route.params.title}
            showLeft
            onPress={() => {
              dispatch({
                type: Types.UPDATE_CART,
                cartId: `${route.params.title}-${route.params.location}`,
                cart: selectedMenu,
              });
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.restListContainer}>
          <SectionList
            sections={menus}
            renderItem={renderMenus}
            renderSectionHeader={renderMenuHeader}
            ItemSeparatorComponent={renderItemSeperator}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
          />
        </View>
        {selectedMenu.length > 0 && (
          <View style={styles.cartButtonContainer}>
            <Button onPress={handleNavigateToCart} title="Go to Cart" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
