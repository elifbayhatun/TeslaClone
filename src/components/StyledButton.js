import {Text, View, Pressable} from 'react-native';
import React from 'react';
import {buttonStyles} from '../styles/buttonStyles';

const StyledButton = props => {
  const {type, content, onPress} = props;

  const backgroundColor = type === 'primary' ? '#171A' : 'gray';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={buttonStyles.container}>
      <Pressable
        style={[buttonStyles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}>
        <Text style={[buttonStyles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
