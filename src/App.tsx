import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Layout from "./modules/Layout";
import Login from "./modules/Login";
import Home from "./modules/Home";
import Error from "./modules/Error";
import Spinner from './modules/Spinner';
import Notification from './modules/Notification';
import { StateProvider } from './providers';

const App = () => (
  <StateProvider>
    <ThemeProvider theme={theme}>
      <Spinner />
      <Notification />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StateProvider>
);

export default App;
