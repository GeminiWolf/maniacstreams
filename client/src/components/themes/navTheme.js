import {createTheme} from '@mui/material/styles'

export const NavThemes = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#aaa',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#bbb',
    },
    textColorPrimary: {
      main: '#fff'
    },
    textColorSecondary: {
      main: '#aaa'
    }
  },
});
