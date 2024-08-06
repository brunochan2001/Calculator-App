import React from 'react';
import { render } from '@testing-library/react-native';
import { Button } from '../../../src/components/Button';
import { TextStyle } from 'react-native';

describe('<Button>', () => {
  it('should render the title', () => {
    const title = 'Test';

    // Render the component with the specified title
    const { getByText } = render(<Button title={title} onPress={() => {}} />);

    // Assert that the text is present in the rendered output
    const buttonText = getByText(title);

    // Checks that the text is present
    expect(buttonText).toBeTruthy();
  });

  it('should apply gray color when isGray is true', () => {
    const title = 'Test';
    const bgGray = '#D2D3DA';
    const colorWhite = '#000';

    // Render the component with the specified color
    const { getByTestId } = render(<Button title={title} isGray onPress={() => {}} />);

    // Find the button and text elements using testID
    const foundButtonElement = getByTestId('button');
    const foundTextElement = getByTestId('button-text');

    // Extract the style
    const buttonStyle = foundButtonElement.props.style;
    const textStyle = foundTextElement.props.style;

    // Check the button color
    expect(buttonStyle.backgroundColor).toEqual(bgGray);

    // Check the text color
    expect(textStyle.some((style: TextStyle) => style.color === colorWhite)).toBeTruthy();
  });
});
