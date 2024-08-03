import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '../../components/Button';

const CalculatorControls = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleOperationPress = (value: string) => {
    if (firstNumber) {
      setOperation(value);
    }
  };

  const handleClearNumbers = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
  };

  const handleNumberPress = (value: string) => {
    if (operation === '') {
      setFirstNumber((prev) => prev + value);
    } else {
      setSecondNumber((prev) => prev + value);
    }
  };

  const handleDeleteLastDigit = () => {
    if (operation === '') {
      setFirstNumber((prev) => prev.slice(0, -1));
    } else {
      setSecondNumber((prev) => prev.slice(0, -1));
    }
  };

  const handleChangeSign = () => {
    if (operation === '') {
      setFirstNumber((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
    } else {
      setSecondNumber((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
    }
  };

  const handleCalculatePercentageNumber = () => {
    if (operation === '') {
      setFirstNumber((prev) => (prev ? (parseFloat(prev) / 100).toString() : ''));
    } else {
      setSecondNumber((prev) => (prev ? (parseFloat(prev) / 100).toString() : ''));
    }
  };

  const handleAddDecimalPoint = () => {
    if (operation === '') {
      setFirstNumber((prev) => (prev.includes('.') ? prev : prev + '.'));
    } else {
      setSecondNumber((prev) => (prev.includes('.') ? prev : prev + '.'));
    }
  };

  const calculateResult = (num1: number, num2: number, operation: string): number | null => {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '÷':
        return num2 === 0 ? null : num1 / num2;
      default:
        return null;
    }
  };

  const handleGetResult = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    const result = calculateResult(num1, num2, operation);

    setOperation('');
    setFirstNumber(`${result?.toString()}`);
    setSecondNumber('');
  };

  const renderNumbers = () => {
    const fullNumber = `${firstNumber} ${operation} ${secondNumber}`;
    const fontSize = fullNumber.length > 9 ? 36 : 72;

    return (
      <View style={styles.contentText}>
        {firstNumber && <Text style={[styles.text, { fontSize: fontSize }]}>{firstNumber}</Text>}
        {operation && <Text style={[styles.text, { fontSize: fontSize }]}>{operation}</Text>}
        {secondNumber && <Text style={[styles.text, { fontSize: fontSize }]}>{secondNumber}</Text>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderNumbers()}
      <View style={styles.row}>
        <Button title="c" onPress={handleClearNumbers} isGray />
        <Button title="+/-" onPress={handleChangeSign} isGray />
        <Button title="%" onPress={handleCalculatePercentageNumber} isGray />
        <Button title="÷" onPress={() => handleOperationPress('÷')} isOrange />
      </View>
      <View style={styles.row}>
        <Button title="1" onPress={() => handleNumberPress('1')} isDark />
        <Button title="2" onPress={() => handleNumberPress('2')} isDark />
        <Button title="3" onPress={() => handleNumberPress('3')} isDark />
        <Button title="x" onPress={() => handleOperationPress('x')} isOrange />
      </View>
      <View style={styles.row}>
        <Button title="4" onPress={() => handleNumberPress('4')} isDark />
        <Button title="5" onPress={() => handleNumberPress('5')} isDark />
        <Button title="6" onPress={() => handleNumberPress('6')} isDark />
        <Button title="-" onPress={() => handleOperationPress('-')} isOrange />
      </View>
      <View style={styles.row}>
        <Button title="7" onPress={() => handleNumberPress('7')} isDark />
        <Button title="8" onPress={() => handleNumberPress('8')} isDark />
        <Button title="9" onPress={() => handleNumberPress('9')} isDark />
        <Button title="+" onPress={() => handleOperationPress('+')} isOrange />
      </View>
      <View style={styles.row}>
        <Button title="." onPress={handleAddDecimalPoint} isDark />
        <Button title="0" onPress={() => handleNumberPress('0')} isDark />
        <Button title="⌫" onPress={handleDeleteLastDigit} isDark />
        <Button title="=" onPress={handleGetResult} isOrange />
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
  text: {
    color: '#fff',
    textAlign: 'right',
    flex: 1,
  },
  contentText: {
    width: '90%',
    display: 'flex',
    alignSelf: 'center',
  },
});
