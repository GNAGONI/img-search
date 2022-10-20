import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Image from './index';

describe('Image', () => {
  it('should have snapshot', () => {
    const tree = renderer
      .create(
        <Image url="www.123.com" alt="img" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    render(<Image url="www.123.com" alt="img" />);

    const img = screen.getByRole('img', { name: 'img' });
    expect(img).toBeInTheDocument();
    expect(img).toBeVisible();

    const button = screen.getByRole('button', { name: 'img' });
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });
});
