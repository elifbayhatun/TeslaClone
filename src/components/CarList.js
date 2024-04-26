import React from 'react';
import Cars from '../constants/Cars';
import {Dimensions, FlatList, View} from 'react-native';
import CarItem from './CarItem';
import cardListStyle from '../styles/cardListStyles';

const CarList = () => {
  const {height} = Dimensions.get('screen');
  console.log(Cars);
  return (
    <View style={cardListStyle.container}>
      <FlatList
        data={Cars}
        renderItem={({item}) => <CarItem car={item} />}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={height}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CarList;
