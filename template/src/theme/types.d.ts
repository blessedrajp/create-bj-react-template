import type { CssVarsTheme } from '@mui/material/styles';
import type { Theme as BaseTheme } from '@mui/material/styles/createTheme';

export type Theme = Omit<BaseTheme, 'palette'> & CssVarsTheme;

export type ColorScheme = 'dark' | 'light';

declare module '@mui/material/styles' {
  interface PaletteColor {
    extraLight?: string;
  }
  interface SimplePaletteColorOptions {
    extraLight?: string;
  }
  interface TypeBackground {
    level1?: string;
    level2?: string;
  }
}
