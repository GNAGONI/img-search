import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './index';
import { StateProvider } from '../../providers';

it('renders correctly PrivateRoute', () => {
  const tree = renderer
    .create(
      <StateProvider>
        <BrowserRouter>
          <Routes>
            <Route element={
              <PrivateRoute>
                <></>
              </PrivateRoute>}
            />
          </Routes>
        </BrowserRouter>
      </StateProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
