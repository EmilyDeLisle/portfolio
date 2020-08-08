import React, { MouseEvent } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { About, Header, ScrollToTopButton } from './components'
import { theme } from './theme'

export const App = () => {
  const handleNavigationClick = (event: MouseEvent<HTMLDivElement>, anchorId: string) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      anchorId
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Header handleNavigationClick={handleNavigationClick} />
      <About/>
      <ScrollToTopButton handleNavigationClick={handleNavigationClick} />
    </MuiThemeProvider>
  )
}

export default App
