import renderer from 'react-test-renderer';
import Header from './index';

it('renders correctly Header', () => {
  const tree = renderer
    .create(
      <Header>
        <></>
      </Header>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});