import {View} from 'react-native';
import React from 'react';
import {CardItemStyles} from './src/styles/cardItemStyles';
import CarList from './src/components/CarList';
import Header from './src/components/Header';

const App = () => {
  return (
    <View style={CardItemStyles.container}>
      <Header />
      <CarList />
    </View>
  );
};

export default App;
