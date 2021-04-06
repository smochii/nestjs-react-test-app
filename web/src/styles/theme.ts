import { createMuiTheme } from '@material-ui/core'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#bbbbcc',
      contrastText: '#ffffff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 16,
    fontFamily: ['Noto Sans JP'].join(',')
  }
})
export default theme