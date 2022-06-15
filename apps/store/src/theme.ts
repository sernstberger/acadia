import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
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
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
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
