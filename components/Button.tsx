import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IButtonCustom {
  onPress: () => void;
  isGray?: boolean;
  isDark?: boolean;
  isOrange?: boolean;
  title: string;
}

export const Button: React.FC<IButtonCustom> = ({ onPress, title, isGray, isDark, isOrange }) => {
  let buttonColor = '#FF9500';
  let textColor = '#fff';

  if (isGray) {
    buttonColor = '#D2D3DA';
    textColor = '#000';
  } else if (isDark) {
    buttonColor = '#505050';
    textColor = '#fff';
  } else if (isOrange) {
    buttonColor = '#FF9500';
    textColor = '#fff';
  }

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={onPress}>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  text: {
    fontSize: 32,
    color: '#fff',
  },
});
