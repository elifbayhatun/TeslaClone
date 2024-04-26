import React from 'react';
import {Image, View} from 'react-native';
import headerStyles from '../styles/headerStyles';

const Header = () => {
  return (
    <View style={headerStyles.container}>
      <Image
        style={headerStyles.logo}
        source={require('../../assets/logo.png')}
      />
      <Image
        style={headerStyles.menu}
        source={require('../../assets/menu.png')}
      />
    </View>
  );
};

export default Header;
