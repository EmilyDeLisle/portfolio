import React from 'react'
import Typography from '@material-ui/core/Typography'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { About, Contact, Header, Projects, Rule, ScrollToTopButton, TopNavBar } from './components'
import { theme } from './theme'

export const App = () => {
  const handleNavigationClick = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement | HTMLLIElement>,
    anchorId: string
  ) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      anchorId
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <TopNavBar handleNavigationClick={handleNavigationClick} />
        <Header handleNavigationClick={handleNavigationClick} />
        <About />
        <Rule />
        <Projects />
        <Rule />
        <Contact />
        <Typography color='inherit' align='center'>© Emily DeLisle</Typography>
        <ScrollToTopButton handleNavigationClick={handleNavigationClick} />
      </div>
    </MuiThemeProvider>
  )
}

export default App
