import {StyleSheet} from 'react-native';
import {vh, vw} from '../../constants/Dimension';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  restaurantContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: vh(10),
    borderRadius: vw(20),
    backgroundColor: Colors.color_FFFFFF,
  },
  restImage: {
    width: vw(90),
    height: vw(90),
    resizeMode: 'contain',
    borderRadius: vw(15),
  },
  restNameAndDistContainer: {
    paddingStart: vw(20),
    paddingVertical: vh(8),
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ratingAndDistContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: vh(8),
  },
  text16600: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.color_191919,
  },
  text10500: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.color_3A4750,
  },
  text12600: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.color_303841,
  },

  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: vh(10),
    borderRadius: vw(20),
    backgroundColor: Colors.color_FFFFFF,
  },
  menuNameAndCountContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingStart: vw(20),
    paddingVertical: vh(8),
    width: vw(225),
    height: vw(90),
  },
  minusAndPlusContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
  },
  textAddedCount: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.color_1BAC4B,
  },
});
