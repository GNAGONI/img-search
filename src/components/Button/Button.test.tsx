import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('should have snapshot', () => {
    const mockCallback = jest.fn();
    const tree = renderer
      .create(<Button title="Test" onClick={mockCallback} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    const mockCallback = jest.fn();
    render(<Button title="Test" onClick={mockCallback} />);

    const button = screen.getByRole('button', { name: 'Test' });
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();

    fireEvent.click(button);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
