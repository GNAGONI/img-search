import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './index';
import { StateProvider } from '../../providers';


it('renders correctly Login', () => {
  const tree = renderer
    .create(
      <StateProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
          </Routes>
        </BrowserRouter>
      </StateProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
