import React, {useMemo, useState} from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';
import {styles} from './styles';
import {useAppSelector, useAppDispatch} from '../../utils/Hooks/Hooks';
import {MenuCard} from '../../components/cards';
import {MenuItemProps, CartMenuItemProps} from '../Menu/types';
import {CartScreentNavigationType} from './types';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {Header} from '../../components/header';
import {Button} from '../../components/button';
import Types from '../../constants/Types';

export const Cart = () => {
  const navigation = useNavigation<CartScreentNavigationType>();
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(state => state.cart);
  const [menus, setMenus] = useState(cart ?? []);
  const renderMenus = ({
    item,
    index,
  }: {
    item: CartMenuItemProps;
    index: number;
  }) => {
    if (item.addedCount > 0) {
      return (
        <MenuCard
          menuImage={item.image}
          menuTitle={item.name}
          addedCount={item.addedCount}
          price={item.price}
          onPressAdd={() => {
            handleAddMinusMenu(index, true);
          }}
          onPressRemove={() => {
            handleAddMinusMenu(index, false);
          }}
        />
      );
    }
  };
  const handleAddMinusMenu = (menuIndex: number, increment: boolean) => {
    let currentMenus = [...menus];

    currentMenus[menuIndex].addedCount = increment
      ? currentMenus[menuIndex].addedCount + 1
      : currentMenus[menuIndex].addedCount - 1;

    setMenus([...currentMenus]);
  };

  const totalAmount = useMemo(() => {
    const initialValue = 0;
    const sumWithInitial = menus.reduce(
      (accumulator: number, currentValue: MenuItemProps) =>
        accumulator + currentValue.price * currentValue.addedCount,
      initialValue,
    );
    return sumWithInitial;
  }, [menus]);

  const renderItemSeperator = () => {
    return <View style={styles.seperator} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dataContainer}>
        <View>
          <Header
            title={'Cart'}
            showLeft
            onPress={() => {
              if (totalAmount === 0) {
                dispatch({
                  type: Types.UPDATE_CART,
                  cartId: null,
                  cart: [],
                });
              }
              navigation.goBack();
            }}
          />
        </View>
        {}

        {totalAmount > 0 ? (
          <>
            <View style={styles.restListContainer}>
              <FlatList
                data={menus}
                renderItem={renderMenus}
                ItemSeparatorComponent={renderItemSeperator}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <View style={styles.cartButtonContainer}>
              <Button title={`Proceed to Pay ₹ ${totalAmount}`} />
            </View>
          </>
        ) : (
          <View style={styles.noItemContainer}>
            <Text
              onPress={() => {
                dispatch({
                  type: Types.UPDATE_CART,
                  cartId: null,
                  cart: [],
                });
                navigation.dispatch(
                  CommonActions.reset({
                    index: 1,
                    routes: [{name: 'Home'}],
                  }),
                );
              }}
              style={styles.text16600}>
              No item in cart. Browse restraunt
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
