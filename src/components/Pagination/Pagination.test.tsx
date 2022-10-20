import renderer from 'react-test-renderer';
import Pagination from './index';

it('renders correctly Pagination', () => {
  const mockCallback = jest.fn();
  const tree = renderer
    .create(
      <Pagination page={1} totalPages={10} onChange={mockCallback} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});