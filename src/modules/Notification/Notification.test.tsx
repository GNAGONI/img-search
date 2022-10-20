import renderer from 'react-test-renderer';
import Notification from './index';
import { StateProvider } from '../../providers';

it('renders correctly Notification', () => {
  const tree = renderer
    .create(
      <StateProvider>
        <Notification />
      </StateProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
