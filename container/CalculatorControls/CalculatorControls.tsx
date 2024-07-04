import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { View, StyleSheet, Text } from 'react-native';

const CalculatorControls = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleOperationPress = (value: string) => {
    setOperation(value);
  };

  const handleClearNumbers = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };

  const handleNumberPress = (value: string) => {
    if (operation === '') {
      setFirstNumber(firstNumber + value);
    } else {
      setSecondNumber(secondNumber + value);
    }
    if (result) {
      setResult(null);
    }
  };

  const handleDeleteLastDigit = () => {
    if (operation === '') {
      setFirstNumber(firstNumber.slice(0, -1));
    } else {
      setSecondNumber(secondNumber.slice(0, -1));
    }
  };

  const handleChangeSign = () => {
    if (operation === '') {
      setFirstNumber('-' + firstNumber);
    } else {
      setSecondNumber('-' + secondNumber);
    }
  };

  const handleCalculatePercentageNumber = () => {
    if (operation === '') {
      setFirstNumber((parseInt(firstNumber, 10) / 100).toString());
    } else {
      setSecondNumber((parseInt(secondNumber, 10) / 100).toString());
    }
  };

  const handleAddDecimalPoint = () => {
    if (operation === '') {
      setFirstNumber(firstNumber + '.');
    } else {
      setSecondNumber(secondNumber + '.');
    }
  };

  const handleGetResult = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operation) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case 'x':
        setResult(num1 * num2);
        break;
      case '÷':
        if (num2 === 0) {
          setResult(null);
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        setResult(null);
    }

    setOperation('');
    setFirstNumber('');
    setSecondNumber('');
  };

  const numbers = () => {
    const fullNumber = firstNumber + ' ' + operation + ' ' + secondNumber;

    if (fullNumber.length > 9) {
      return (
        <>
          <Text style={{ color: '#fff', fontSize: 36, textAlign: 'right' }}>{firstNumber}</Text>
          <Text style={{ color: '#fff', fontSize: 36, textAlign: 'right' }}>{operation}</Text>
          <Text style={{ color: '#fff', fontSize: 36, textAlign: 'right' }}>{secondNumber}</Text>
          <Text style={{ color: '#fff', fontSize: 36, textAlign: 'right' }}>{result}</Text>
        </>
      );
    } else {
      return (
        <>
          <Text style={{ color: '#fff', fontSize: 72, textAlign: 'right' }}>{firstNumber}</Text>
          <Text style={{ color: '#fff', fontSize: 72, textAlign: 'right' }}>{operation}</Text>
          <Text style={{ color: '#fff', fontSize: 72, textAlign: 'right' }}>{secondNumber}</Text>
          <Text style={{ color: '#fff', fontSize: 72, textAlign: 'right' }}>{result}</Text>
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 300,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
        {numbers()}
      </View>
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
});
