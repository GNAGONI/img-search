import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Error from './index';
import { Text } from '../../constants';

describe('Error', () => {
  it('should have snapshot', () => {
    const tree = renderer
      .create(<Error />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    render(<Error />);
    const errorCode = screen.getByText(Text.NOT_FOUND_ERROR_CODE);
    expect(errorCode).toBeInTheDocument();
    const errorMessage = screen.getByText(Text.NOT_FOUND_ERROR_MESSAGE);
    expect(errorMessage).toBeInTheDocument();
  });
});
