import renderer from 'react-test-renderer';
import Spinner from './index';
import { StateProvider } from '../../providers';

it('renders correctly Spinner', () => {
  const tree = renderer
    .create(
      <StateProvider>
        <Spinner />
      </StateProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
