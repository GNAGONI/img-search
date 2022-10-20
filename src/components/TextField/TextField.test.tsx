import renderer from 'react-test-renderer';
import TextField from './index';

it('renders correctly TextField', () => {
  const mockCallback = jest.fn();
  const tree = renderer
    .create(
      <TextField label="Test" value="test" onChange={mockCallback} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});