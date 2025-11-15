import { ThemeOptions } from '@mui/material/styles';
import { APP_BAR_HEIGHT } from '@/constants';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#E40712',
    },
    secondary: {
      main: '#242527',
    },
    background: {
      default: '#f0f0f0',
      paper: '#fdfdfd',
    },
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#242527',
          color: '#E40712',
          borderBottom: '1.5px solid #E40712',
          height: APP_BAR_HEIGHT,
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0.375rem',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          paddingRight: 0,
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          minWidth: 250
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          minWidth: 250
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          padding: 0,
        }
      }
    }
  },
};