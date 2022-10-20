import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../modules/Layout";
import Login from "../modules/Login";
import Home from "../modules/Home";
import Error from "../modules/Error";
import PrivateRoute from '../modules/PrivateRoute';

const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route
          path="/home"
          element={(
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          )}
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
