import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#BC0F0F',
    },
    secondary: {
      main: '#4285f4',
    },
    background: {
      default: '#f0f0f0',
      paper: '#fdfdfd',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
        },
      },
    },
  },
};