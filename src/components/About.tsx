import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Section } from './Section'
import portrait from '../assets/portrait.jpg'

import techBootstrap from '../assets/bootstrap.png'
import techCSS from '../assets/css.png'
import techHTML from '../assets/html.png'
import techJava from '../assets/java.png'
import techJQuery from '../assets/jquery.png'
import techJS from '../assets/js.png'
import techNodeJS from '../assets/nodejs.png'
import techPS from '../assets/ps.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    photo: {
      border: `4px solid ${theme.palette.primary.main}`,
    },
  })
)

const technologies = [
  {
    name: 'HTML',
    image: techHTML,
  },
  {
    name: 'CSS',
    image: techCSS,
  },
  {
    name: 'JavaScript',
    image: techJS,
  },
  {
    name: 'Bootstrap',
    image: techBootstrap,
  },
  {
    name: 'jQuery',
    image: techJQuery,
  },
  {
    name: 'Node.js',
    image: techNodeJS,
  },
  {
    name: 'Java',
    image: techJava,
  },
  {
    name: 'Photoshop',
    image: techPS,
  },
]

export const About = () => {
  const classes = useStyles()
  return (
    <Section title="About" anchorId="about-anchor">
      <div className="about__contents">
        <div className="about__photo-text">
          <div className="about__photo-container">
            <img
              className={`${classes.photo} about__photo`}
              alt="Portrait of Emily"
              src={portrait}
            />
          </div>
          <div className="about__text">
            <Typography>
              I've taken a meandering path to becoming a developer. I've been a 3D artist, graphic
              designer, cook, illustrator, and most recently, a hospital pharmacy technician.
              <br />
              <br />
              While pharmacy has been a rewarding career for the last few years, I found that I
              needed something a little more fast-paced and where I could constantly be learning new
              things. I tried my hand at learning to code on my own as I have always been a
              technical-minded person. I found I needed more structure, and so I dove headfirst into
              the Computer Systems Technology program at BCIT. It's been challenging, but very
              rewarding, as I have learned a ton in a very short amount of time.
              <br />
              <br />
              Aside from my work and studies, here are a few more tidbits about me:
            </Typography>
            <ul>
              <li>
                <Typography>I love video games.</Typography>
              </li>
              <li>
                <Typography>
                  I'm an avid reader of science fiction and fantasy novels (I love the Expanse!).
                </Typography>
              </li>
              <li>
                <Typography>I have my Advanced Open Water Diver PADI certification.</Typography>
              </li>
              <li>
                <Typography>I collect and care for houseplants (mostly successfully).</Typography>
              </li>
              <li>
                <Typography>
                  I am owned by a 155-gram white-bellied caique parrot named Griffin.
                </Typography>
              </li>
            </ul>
          </div>
        </div>
        <div className="about__technologies">
          <Grid container spacing={10}>
            {technologies.map((tech) => (
              <Grid key={tech.name} item sm={6} md={3}>
                <div className="about__technology">
                  <img className="about__technology-img" alt={tech.name} src={tech.image} />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Section>
  )
}