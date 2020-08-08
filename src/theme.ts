import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a3153e',
      main: '#ea1e5a',
      dark: '#ee4b7b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#2e8a4e',
      main: '#43c670',
      dark: '#68d18c',
      contrastText: '#fff'
    },
    text: {
      primary: '#ea1e5a',
    },
  },
  typography: {
    h3: {
      fontFamily: 'Leckerli One, cursive'
    }
  }
})
