import renderer from 'react-test-renderer';
import Button from './index';

it('renders correctly Button', () => {
  const mockCallback = jest.fn();
  const tree = renderer
    .create(<Button title="Test" onClick={mockCallback} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});