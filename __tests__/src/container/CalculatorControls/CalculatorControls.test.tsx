import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CalculatorControls from '../../../../src/container/CalculatorControls/CalculatorControls';

describe('<CalculatorControls /> - Basic Arithmetic Operations', () => {
  it('should add the numbers', () => {
    const { getByTestId, getByText } = render(<CalculatorControls />);

    const firstNumber = '23';
    const secondNumber = '50';
    const operation = '+';

    // Simulate input for the first number
    [...firstNumber].forEach((num) => fireEvent.press(getByText(num)));

    // Simulate pressing the operation button
    fireEvent.press(getByText(operation));

    // Simulate input for the second number
    [...secondNumber].forEach((num) => fireEvent.press(getByText(num)));

    // Simulate pressing '=' to get the result
    fireEvent.press(getByText('='));

    // Assert the result
    const resultText = getByTestId('firstNumber');
    expect(resultText.props.children).toBe('73'); // 23 + 50 = 73
  });

  it('should subtraction the numbers', () => {
    const { getByTestId, getByText } = render(<CalculatorControls />);

    const firstNumber = '23';
    const secondNumber = '50';
    const operation = '-';

    // Simulate input for the first number
    [...firstNumber].forEach((num) => fireEvent.press(getByText(num)));

    // Simulate pressing the operation button
    fireEvent.press(getByText(operation));

    // Simulate input for the second number
    [...secondNumber].forEach((num) => fireEvent.press(getByText(num)));

    // Simulate pressing '=' to get the result
    fireEvent.press(getByText('='));

    // Assert the result
    const resultText = getByTestId('firstNumber');
    expect(resultText.props.children).toBe('-27'); // 23 - 50 = -27
  });

  it('should multiplication the numbers', () => {
    const { getByTestId, getByText } = render(<CalculatorControls />);

    const firstNumber = '23';
    const secondNumber = '50';
    const operation = 'x';

    // Simulate input for the first number
    [...firstNumber].forEach((num) => fireEvent.press(getByText(num)));

    // Simulate pressing the operation button
    fireEvent.press(getByText(operation));

    // Simulate input for the second number
    [...secondNumber].forEach((num) => fireEvent.press(getByText(num)));

    // Simulate pressing '=' to get the result
    fireEvent.press(getByText('='));

    // Assert the result
    const resultText = getByTestId('firstNumber');
    expect(resultText.props.children).toBe('1150'); // 23 * 50 = 1150
  });

  it('should division the numbers', () => {
    const { getByTestId, getByText } = render(<CalculatorControls />);

    const firstNumber = '23';
    const secondNumber = '50';
    const operation = '÷';

    // Simulate input for the first number
    [...firstNumber].forEach((num) => fireEvent.press(getByText(num)));

    // Simulate pressing the operation button
    fireEvent.press(getByText(operation));

    // Simulate input for the second number
    [...secondNumber].forEach((num) => fireEvent.press(getByText(num)));

    // Simulate pressing '=' to get the result
    fireEvent.press(getByText('='));

    // Assert the result
    const resultText = getByTestId('firstNumber');
    expect(resultText.props.children).toBe('0.46'); // 23 ÷ 50 = 0.46
  });
});
