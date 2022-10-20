import renderer from 'react-test-renderer';
import Wrapper from './index';

it('renders correctly Wrapper', () => {
  const tree = renderer
    .create(
      <Wrapper orientation='row'>
        <></>
      </Wrapper>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});