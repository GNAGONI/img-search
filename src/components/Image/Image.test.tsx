import renderer from 'react-test-renderer';
import Image from './index';

it('renders correctly Image', () => {
  const tree = renderer
    .create(
      <Image url="www.123.com" alt="img" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});