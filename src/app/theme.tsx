import { ThemeOptions, PaletteOptions, PaletteColor  } from '@mui/material/styles';
import { APP_BAR_HEIGHT } from '@/constants';

interface Color extends Pick<PaletteColor, "main"> {
  light?: string;
  dark?: string;
  contrastText?: string;
}

interface Palette extends PaletteOptions {
  primary: Color;
  secondary: Color;
}

const palette: Palette  = {
  mode: 'light',
  primary: {
    // Orchid
    main: '#db77c2',
  },
  secondary: {
    main: '#131e31',
  },
  background: {
    default: '#f0f0f0',
    paper: '#fdfdfd',
  },
  // blueViolet: {
  //   main: '#5953bb',
  // },
  // brightSun: {
  //   main: '#fec140',
  // },
  // orchid: {
  //   main: '#9e5777',
  // },
  // pomegranate: {
  //   main: '#f64315'
  // },
  // viking: {
  //   main: '#77d0db',
  // }
};

export const themeOptions: ThemeOptions = {
  palette,
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: palette.secondary.main,
          color: palette.primary.main,
          borderBottom: `4px solid ${palette.primary.main}`,
          height: APP_BAR_HEIGHT,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        color: 'secondary',
      },
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
        slotProps: {
          select: {
            sx: { "& .MuiSelect-select": { display: 'flex', alignItems: 'center' } },
          },
        }
      },
      styleOverrides: {
        root: {
          minWidth: 250
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 5,
        }
      }
    },
  },
};