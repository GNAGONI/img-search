import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';

describe('Form', () => {
  it('should have snapshot', () => {
    const mockCallback = jest.fn();
    const tree = renderer
      .create(
        <Form onSubmit={mockCallback}>
          <></>
        </Form>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    const mockCallback = jest.fn();
    const { container } = render(
      <Form onSubmit={mockCallback}>
        <input type="text" />
        <button>Test</button>
      </Form>
    );

    const form = container.querySelector('form');
    expect(form).toBeInTheDocument();
    expect(form).toBeVisible();

    const button = screen.getByRole('button', { name: 'Test' });
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toBeVisible();

    if (form) {
      fireEvent.submit(form);
      expect(mockCallback).toHaveBeenCalledTimes(1);
    }
  });
});
