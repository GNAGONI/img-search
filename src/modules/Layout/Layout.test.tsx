import renderer from 'react-test-renderer';
import Layout from './index';
import { StateProvider } from '../../providers';

it('renders correctly Layout', () => {
  const tree = renderer
    .create(
      <StateProvider>
        <Layout />
      </StateProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
