import { ReactElement } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import theme from '../theme';

type Props = {
  children: ReactElement | ReactElement[],
}

const ThemeProvider = ({ children }: Props) => (
  <MUIThemeProvider theme={theme}>
    {children}
  </MUIThemeProvider>
);

export default ThemeProvider;
