import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { BaseProviderComponent } from './base-provider.types';

export const BaseProvider: BaseProviderComponent = ({ children, theme }) => (
  <ThemeProvider theme={createTheme(theme)}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default BaseProvider;
