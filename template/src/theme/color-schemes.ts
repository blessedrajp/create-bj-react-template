

import type { ColorSystemOptions } from '@mui/material/styles';
import type { ColorScheme } from './types';
declare module '@mui/material/styles' {
  interface PaletteColor {
    extraLight?: string; // Add your custom property
  }
  interface SimplePaletteColorOptions {
    extraLight?: string; // Add your custom property
  }
}

export const colorSchemes = {
  dark: {
    palette: {
      primary: {
        main: '#AD00AE',
        light: '#FFE3FF',
        dark: '#750075',
        extraLight: '#F0A5F2'

      },
      secondary: {
        main: '#979797',
        light: '#E4E7EC',
        dark: '#5C5C5C',  // Darker gray shade
      },
      success: {
        main: '#17b26a',
        light: '#E2FFF1',
        dark: '#0F7748',
        contrastText: '#ffffff',
      },
      info: {
        main: '#388EF0',
        light: '#D9E8FF',
        dark: ' #2C6BA3',
        contrastText: '#ffffff',
      },
      error: {
        main: '#F04438',
        light: '#FFE1D8',
        dark: '#A62F26',
        contrastText: '#ffffff',
      },
      warning: {
        main: '#F79009',
        light: '#FFF5D7',
        dark: '#F79009',
        contrastText: '#ffffff',
      },
      // purple: {
      //   A50: '#6610f2',
      //   A100: '#9022FB',
      //   A200: '#6915B4',
      //   A250:'#3A006D',
      //   A300:'#3A006D'
      // },
      grey: {
        100: '#F2F6FA',
        200: '#EAEFF4',
        300: '#DFE5EF',
        400: '#7C8FAC',
        500: '#5A6A85',
        600: '#2A3547',
      },
      // blue:{
      //     primary:'#693AED'
      // },
      text: {
        primary: '#343A40',
        secondary: '#979797',
      },

      action: {
        disabledBackground: 'rgba(73,82,88,0.12)',
        hoverOpacity: 0.02,
        hover: '#f6f9fc',
      },
      divider: '#e5eaef',
      background: {
        default: '#343A40',
        level1: '#E9E9E9',//dark
        paper: '#343A40',
        level2: '#F8F9FA',//light
      },
    },
  },
  light: {
    palette: {
      primary: {
        main: '#AD00AE',
        light: '#FFE3FF',
        dark: '#750075',
        extraLight: '#F0A5F2'

      },
      secondary: {
        main: '#979797',
        light: '#E4E7EC',
        dark: '#5C5C5C',  // Darker gray shade
      },
      success: {
        main: '#17b26a',
        light: '#E2FFF1',
        dark: '#0F7748',
        contrastText: '#ffffff',
      },
      info: {
        main: '#388EF0',
        light: '#D9E8FF',
        dark: ' #2C6BA3',
        contrastText: '#ffffff',
      },
      error: {
        main: '#F04438',
        light: '#FFE1D8',
        dark: '#A62F26',
        contrastText: '#ffffff',
      },
      warning: {
        main: '#F79009',
        light: '#FFF5D7',
        dark: '#F79009',
        contrastText: '#ffffff',
      },
      // purple: {
      //   A50: '#6610f2',
      //   A100: '#9022FB',
      //   A200: '#6915B4',
      //   A250:'#3A006D',
      //   A300:'#3A006D'
      // },
      grey: {
        100: '#F2F6FA',
        200: '#EAEFF4',
        300: '#DFE5EF',
        400: '#7C8FAC',
        500: '#5A6A85',
        600: '#2A3547',
      },
      // blue:{
      //     primary:'#693AED'
      // },
      text: {
        primary: '#343A40',
        secondary: '#979797',
      },

      action: {
        disabledBackground: 'rgba(73,82,88,0.12)',
        hoverOpacity: 0.02,
        hover: '#f6f9fc',
      },
      divider: '#e5eaef',
      background: {
        default: '#eef0f2',
        level1: '#E9E9E9',//dark
        paper: '#ffffff',
        level2: '#F8F9FA',//light
      },
    },
  },
} satisfies Partial<Record<ColorScheme, ColorSystemOptions>>;
