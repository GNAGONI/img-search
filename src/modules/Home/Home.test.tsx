import renderer from 'react-test-renderer';
import Home from './index';
import { StateProvider } from '../../providers';

it('renders correctly Home', () => {
  const tree = renderer
    .create(
      <StateProvider>
        <Home />
      </StateProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
