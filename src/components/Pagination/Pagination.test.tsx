import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Pagination from './index';

describe('Pagination', () => {
  it('should have snapshot', () => {
    const mockCallback = jest.fn();
    const tree = renderer
      .create(
        <Pagination page={1} totalPages={10} onChange={mockCallback} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    const mockCallback = jest.fn();
    render(<Pagination page={1} totalPages={3} onChange={mockCallback} />);

    const navigation = screen.getByRole('navigation', { name: 'pagination navigation' });
    expect(navigation).toBeInTheDocument();
    expect(navigation).toBeVisible();

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list).toBeVisible();

    const buttonPrevious = screen.getByRole('button', { name: 'Go to previous page' });
    expect(buttonPrevious).toBeInTheDocument();
    expect(buttonPrevious).toBeVisible();

    const button1 = screen.getByRole('button', { name: 'page 1' });
    expect(button1).toBeInTheDocument();
    expect(button1).toBeVisible();
    expect(button1).toHaveAttribute("aria-current", "true");

    const button2 = screen.getByRole('button', { name: 'Go to page 2' });
    expect(button2).toBeInTheDocument();
    expect(button2).toBeVisible();

    const button3 = screen.getByRole('button', { name: 'Go to page 3' });
    expect(button3).toBeInTheDocument();
    expect(button3).toBeVisible();

    const buttonNext = screen.getByRole('button', { name: 'Go to next page' });
    expect(buttonNext).toBeInTheDocument();
    expect(buttonNext).toBeVisible();
  });
});

