import type { ThemeOptions } from '@mui/material/styles';

export const typography: NonNullable<ThemeOptions['typography']> = {
  fontFamily: '"Julius_Sans_One", "serif"',
  caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.66 },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.5px',
    lineHeight: 2.5,
    textTransform: 'uppercase',
  },
  h1: { fontWeight: 600, fontSize: '2.25rem', lineHeight: '2.75rem' },
  h2: { fontWeight: 600, fontSize: '1.875rem', lineHeight: '2.25rem' },
  h3: { fontWeight: 600, fontSize: '1.5rem', lineHeight: '1.75rem' },
  h4: { fontWeight: 600, fontSize: '1.3125rem', lineHeight: '1.6rem' },
  h5: { fontWeight: 600, fontSize: '1.125rem', lineHeight: '1.6rem' },
  h6: { fontWeight: 600, fontSize: '1rem', lineHeight: '1.2rem' },
  button: { textTransform: 'capitalize', fontWeight: 400 },
  body1: { fontSize: '0.875rem', fontWeight: 400, lineHeight: '1.334rem' },
  body2: { fontSize: '0.75rem', letterSpacing: '0rem', fontWeight: 600, lineHeight: '1rem' },
  subtitle1: { fontSize: '0.875rem', fontWeight: 700, color: '#9f9f9f' },
  subtitle2: { fontSize: '0.875rem', fontWeight: 400 },
};
