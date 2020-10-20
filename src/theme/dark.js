import { red } from '@material-ui/core/colors'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0B6EFD',
    },
    secondary: {
      main: '#1B4077',
    },
    error: {
      main: red.A400,
    },
    text: {
      main: '#000',
    },
    background: {
      paper: '#FFF',
      default: 'rgb(239,239,239)',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

theme = responsiveFontSizes(theme);

// theme.typography.h1 = {
//   fontSize: '3rem',
//   '@media (min-width:600px)': {
//     fontSize: '4.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '6rem',
//   },
// }

// theme.typography.h2 = {
//   fontSize: '2rem',
//   fontWeight: 300,
//   '@media (min-width:600px)': {
//     fontSize: '2.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.75rem',
//   },
// }

// theme.typography.h3 = {
//   fontSize: '1.75rem',
//   fontWeight: 300,
//   lineHeight: '4rem',
// }

// theme.typography.h5 = {
//   fontSize: '1rem',
//   [theme.breakpoints.up('md')]: {
//     fontSize: '1rem',
//   },
// }

export default theme
