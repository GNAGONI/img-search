import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import TextField from './index';

describe('TextField', () => {
  it('should have snapshot', () => {
    const mockCallback = jest.fn();
    const tree = renderer
      .create(
        <TextField label="Test" value="test" onChange={mockCallback} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    const mockCallback = jest.fn();
    const value = "test";
    render(<TextField label="Test" value={value} onChange={mockCallback} />);

    const textField = screen.getByLabelText(/^Test/i) as HTMLInputElement;
    expect(textField).toBeInTheDocument();
    expect(textField).toBeVisible();

    expect(textField.value).toBe(value);
  });
});


