
import Spinner from '../features/Spinner';
import Notification from '../features/Notification';
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
