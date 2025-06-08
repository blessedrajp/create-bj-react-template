import { createTheme } from '@mui/material/styles';
import { colorSchemes } from './color-schemes';
import { typography } from './typography';

export const createAppTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: colorSchemes[mode].palette,
    typography
  });
