import renderer from 'react-test-renderer';
import Error from './index';

it('renders correctly Error', () => {
  const tree = renderer
    .create(<Error />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});