import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {CardItemStyles} from '../styles/cardItemStyles';
import StyledButton from './StyledButton';
import {buttonStyles} from '../styles/buttonStyles';

const CarItem = props => {
  const {name, tagline, image, taglineCTA} = props.car;
  return (
    <View style={CardItemStyles.carContainer}>
      <ImageBackground source={image} style={CardItemStyles.image} />
      <View style={CardItemStyles.titles}>
        <Text style={CardItemStyles.title}>{name}</Text>
        <Text style={CardItemStyles.subTitle}>{tagline}</Text>
        <Text style={CardItemStyles.subTitleCTA}>{taglineCTA}</Text>
      </View>
      <View style={CardItemStyles.buttonContainer}>
        <StyledButton
          type="primary"
          content={'Custom Order'}
          onPress={() => {
            console.warn('Custom Order was pressed');
          }}
        />
        <StyledButton
          type="secondary"
          content={'Existing Inventory'}
          onPress={() => {
            console.warn('Existing Inventory was pressed');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
