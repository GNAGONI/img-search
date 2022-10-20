import renderer from 'react-test-renderer';
import Form from './index';

it('renders correctly Form', () => {
  const mockCallback = jest.fn();
  const tree = renderer
    .create(
      <Form onSubmit={mockCallback}>
        <></>
      </Form>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});