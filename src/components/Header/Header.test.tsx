import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  it('should have snapshot', () => {
    const tree = renderer
      .create(
        <Header>
          <></>
        </Header>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    const { container } = render(
      <Header>
        <button>Test</button>
      </Header>
    );

    const header = container.querySelector('div');
    expect(header).toBeInTheDocument();
    expect(header).toBeVisible();

    const button = screen.getByRole('button', { name: 'Test' });
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });
});

