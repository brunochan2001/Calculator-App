import React from 'react';
import { Button } from '../../components/Button';
import { View, StyleSheet } from 'react-native';

const CalculatorControls = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="c" onPress={() => {}} isGray />
        <Button title="+/-" onPress={() => {}} isGray />
        <Button title="%" onPress={() => {}} isGray />
        <Button title="÷" onPress={() => {}} isOrange />
      </View>
      <View style={styles.row}>
        <Button title="1" onPress={() => {}} isDark />
        <Button title="2" onPress={() => {}} isDark />
        <Button title="3" onPress={() => {}} isDark />
        <Button title="x" onPress={() => {}} isOrange />
      </View>
      <View style={styles.row}>
        <Button title="4" onPress={() => {}} isDark />
        <Button title="5" onPress={() => {}} isDark />
        <Button title="6" onPress={() => {}} isDark />
        <Button title="-" onPress={() => {}} isOrange />
      </View>
      <View style={styles.row}>
        <Button title="7" onPress={() => {}} isDark />
        <Button title="8" onPress={() => {}} isDark />
        <Button title="9" onPress={() => {}} isDark />
        <Button title="+" onPress={() => {}} isOrange />
      </View>
      <View style={styles.row}>
        <Button title="." onPress={() => {}} isDark />
        <Button title="0" onPress={() => {}} isDark />
        <Button title="⌫" onPress={() => {}} isDark />
        <Button title="=" onPress={() => {}} isOrange />
      </View>
    </View>
  );
};

export default CalculatorControls;

const styles = StyleSheet.create({
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
  },
  container: {
    position: 'absolute',
    bottom: 50,
  },
});
