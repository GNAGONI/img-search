import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Layout from "./components/Layout";
import Login from "./components/Login";
import Home from "./components/Home";
import Error from "./components/Error";
import Spinner from './components/Spinner';
import Notification from './components/Notification';
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
