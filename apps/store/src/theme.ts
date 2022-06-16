import { alpha, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'inherit',
        elevation: 0,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.3)}`,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.3)}`,
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          overflow: 'visible',
        },
      },
    },
    // MuiCardContent: {
    //   styleOverrides: {
    //     root: {
    //       paddingLeft: 0,
    //       paddingRight: 0,
    //     },
    //   },
    // },
  },
});

export default theme;
