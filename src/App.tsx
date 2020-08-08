import React, { MouseEvent } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { About, Header, Rule, ScrollToTopButton, Section } from './components'
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
      <div className="app">
        <Header handleNavigationClick={handleNavigationClick} />
        <About />
        <Rule />
        <Section title="Projects" anchorId="projects-anchor">
          Projects
        </Section>
        <Rule />
        <Section title="Contact" anchorId="contact-anchor">
          Projects
        </Section>
        <ScrollToTopButton handleNavigationClick={handleNavigationClick} />
      </div>
    </MuiThemeProvider>
  )
}

export default App
