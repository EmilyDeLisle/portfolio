import React from 'react'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Section } from './Section'

import medManager from '../assets/medManager.png'
import plantPal1 from '../assets/plantPal1.png'
import weather from '../assets/weather.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    photo: {
      border: `4px solid ${theme.palette.primary.main}`,
    },
  })
)

/*
Projects:

- Plant Pal 2
- PYCS app
- Draw
- Chess
- Plant Pal 1
- MedManager
- Weather

Maybe:
- Random quote
- Wikipedia
- Pokeretriever
*/

const projects = [
  {
    name: 'Plant Pal 2',
    image: plantPal1,
  },
  {
    name: 'PYCS Database App',
    image: plantPal1,
  },
  {
    name: 'Draw',
    image: plantPal1,
  },
  {
    name: 'Chess',
    image: plantPal1,
  },
  {
    name: 'Plant Pal 1',
    image: plantPal1,
  },
  {
    name: 'MedManager',
    image: medManager,
  },
  {
    name: 'Weather App',
    image: weather,
  },
]

export const Projects = () => {
  const classes = useStyles()
  return (
    <Section title="Projects" anchorId="projects-anchor">
      <div className="projects__container">
        <Grid container spacing={10}>
          {projects.map((project) => (
            <Grid key={project.name} item sm={12} md={6}>
              <div className="projects__project">
                <img className="projects__project-img" alt={project.name} src={project.image} />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Typography align="center">For more projects, check out my GitHub</Typography>
    </Section>
  )
}
