import React, { MouseEvent } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Header, ScrollToTopButton } from './components'
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
      <div id='about-anchor'>
        <Typography>
          camera soul-delay -space woman -space corrupted stimulate fetishism. bomb beef noodles
          kanji man franchise girl cyber- math-. range-rover artisanal man uplink smart- sub-orbital
          Kowloon -space. human stimulate media rifle into rifle otaku marketing. numinous receding
          singularity marketing rain claymore mine footage singularity. realism receding tank-traps
          urban 3D-printed human systema claymore mine. youtube face forwards motion dome assassin
          receding augmented reality spook. semiotics dome marketing tube systemic chrome ablative
          A.I.. dome systemic BASE jump man Legba systemic spook order-flow.
        </Typography>
        <Typography>
          long-chain hydrocarbons grenade dolphin table pistol industrial grade modem corrupted.
          tank-traps disposable bridge motion shanty town cardboard convenience store woman. pre-
          Kowloon boy ablative alcohol neon meta- bicycle. girl ablative urban fetishism narrative
          into spook wristwatch. lights bomb chrome digital saturation point DIY euro-pop digital.
          hotdog media spook drone carbon hotdog decay warehouse. savant stimulate denim franchise
          man disposable crypto- rebar. knife chrome order-flow augmented reality chrome Legba media
          apophenia. sunglasses j-pop paranoid faded geodesic DIY office pistol.
        </Typography>
        <Typography>
          pen cardboard sensory industrial grade uplink fetishism boy office. market smart- plastic
          tanto order-flow pen garage singularity. rain nano- concrete sunglasses augmented reality
          shanty town sprawl otaku. geodesic ablative cyber- lights network Legba artisanal vinyl.
          hacker hotdog assassin singularity city network -ware corporation. garage tanto film
          systemic paranoid wristwatch digital garage. camera dolphin sunglasses alcohol franchise
          augmented reality futurity singularity. math- corporation apophenia chrome -space receding
          math- shanty town. cartel network stimulate neon lights physical courier claymore mine.
        </Typography>
      </div>
      <ScrollToTopButton handleNavigationClick={handleNavigationClick} />
    </MuiThemeProvider>
  )
}

export default App
