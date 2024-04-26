import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');
const CardItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carContainer: {width: '100%', height: height},

  titles: {alignItems: 'center', width: '100%', marginTop: '30%'},

  title: {fontSize: 40, fontWeight: 'bold'},

  subTitle: {fontSize: 16},

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  subTitleCTA: {
    textDecorationLine: 'underline',
  },
});

export {CardItemStyles};
