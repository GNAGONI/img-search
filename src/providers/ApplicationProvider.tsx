
import Spinner from '../modules/Spinner';
import Notification from '../modules/Notification';
import StateProvider from './StateProvider';
import RouterProvider from './RouterProvider';
import ThemeProvider from './ThemeProvider';

const AppProvider = () => (
  <StateProvider>
    <ThemeProvider>
      <Spinner />
      <Notification />
      <RouterProvider />
    </ThemeProvider>
  </StateProvider>
);

export default AppProvider;
