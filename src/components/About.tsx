import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Markdown, { MarkdownOptions } from 'markdown-to-jsx'
import { Section } from './Section'
import portrait from '../assets/portrait.jpg'
import griffin from '../assets/griffin.png'

import techBootstrap from '../assets/bootstrap.png'
import techC from '../assets/c.png'
import techCSS from '../assets/css.png'
import techFirebase from '../assets/firebase.png'
import techGit from '../assets/git.png'
import techHTML from '../assets/html.png'
import techJava from '../assets/java.png'
import techJQuery from '../assets/jquery.png'
import techJS from '../assets/js.png'
import techMaterial from '../assets/material.png'
import techNodeJS from '../assets/nodejs.png'
import techPS from '../assets/ps.png'
import techPython from '../assets/python.png'
import techReact from '../assets/react.png'
import techTS from '../assets/ts.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    photo: {
      border: `4px solid ${theme.palette.primary.main}`,
    },
    li: {
      fontFamily: 'Roboto',
      marginBottom: '0.5em'
    },
    link: {
      padding: 0,
    },
  })
)

const blurb = `I didn't start out as a software developer. Actually, I've taken a pretty meandering path to getting where I am now. I've been a 3D artist, graphic designer, cook, illustrator, and most recently, a hospital pharmacy technician, which is where I've stayed for nearly ten years. After dabbling a bit in coding and finding a real passion for it, I decided it was time for a pivot and dove in headfirst.

My first endeavours were with self-learning in places like [Codeacademy](https://www.codecademy.com/), [freeCodeCamp](https://www.freecodecamp.org/), and [Udemy](https://www.udemy.com/). I needed more structure so I decided to drop my full-time line as a pharmacy technician and enrol in the [Computer Systems Technology](https://www.bcit.ca/study/programs/5500dipma) program at the [British Columbia Institute of Technology](https://www.bcit.ca/).

The CST program uses a very hands-on approach to learning and from day one I was creating some pretty cool things like taking part in some fun (and challenging) collaborative student projects. I managed to secure a sought-after co-op position and from January to September 2019 I worked as a front end engineer for [Grow Technologies](https://www.linkedin.com/company/poweredbygrow). There I got to work on some awesome stuff (with an awesome team!) and really got to sink my teeth into React. I was even along for the ride while they were [acquired](https://betakit.com/vancouver-based-grow-technologies-acquired-by-albertas-atb-financial/) by [ATB Financial](https://www.atb.com/).

Right now I'm in my last term at BCIT. I graduate in December 2020. I'm excited for what's next!`

const tidbits = `A couple extra litle tidbits about me:

- I love video games, especially MMORPGs.

- I also love games of the tabletop variety. Most recently I've been playing Burning Wheel.

- I'm an avid reader of science fiction and fantasy novels (I love the Expanse!).

- I have my Advanced Open Water Diver PADI certification. My favourite diving experience yet has been cenote diving in Mexico.

- I collect and care for tropical houseplants (mostly successfully...).

- I am owned by a 155-gram white-bellied caique parrot named Griffin.`

const technologies = [
  {
    name: 'JavaScript',
    image: techJS,
  },
  {
    name: 'TypeScript',
    image: techTS,
  },
  {
    name: 'React',
    image: techReact,
  },
  {
    name: 'Java',
    image: techJava,
  },
  {
    name: 'Python',
    image: techPython,
  },
  {
    name: 'C',
    image: techC,
  },
  {
    name: 'HTML',
    image: techHTML,
  },
  {
    name: 'CSS',
    image: techCSS,
  },
  {
    name: 'Firebase',
    image: techFirebase,
  },
  {
    name: 'Git',
    image: techGit,
  },
  {
    name: 'Material-UI',
    image: techMaterial,
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
    name: 'Photoshop',
    image: techPS,
  },
]

export const About = () => {
  const classes = useStyles()
  const fullScreen = useMediaQuery(useTheme().breakpoints.down('sm'))

  const markdownOptions: MarkdownOptions = {
    overrides: {
      a: {
        component: Link,
        props: {
          target: '_blank',
          rel: 'noopener',
          variant: 'body2',
          color: 'primary',
          className: classes.link,
        },
      },
      p: { component: Typography, props: { paragraph: true, variant: 'body2' } },
      li: {
        component: 'li',
        props: {
          className: classes.li
        }
      }
    },
  }

  return (
    <Section title="A little about me..." anchorId="about-anchor">
      <div className="about__me">
        <Grid container justify='center' spacing={4}>
          <Grid item sm={12} md={4}>
            <img
              className={`${classes.photo} about__photo`}
              alt="It's me, Emily!"
              src={portrait}
            />
          </Grid>
          <Grid item sm={12} md={8}>
            <Markdown options={markdownOptions}>{blurb}</Markdown>
          </Grid>
          <Grid item sm={12} md={10}>
            <Markdown options={markdownOptions}>{tidbits}</Markdown>
          </Grid>
          <Grid item sm={12} md={2}>
            <img
              className={`${classes.photo} about__photo about__griffin`}
              alt="Griffin"
              src={griffin}
            />
          </Grid>
        </Grid>
      </div>
      <div className="about__technologies">
        <Grid container justify="center" spacing={fullScreen ? 2 : 10}>
          {technologies.map((tech) => (
            <Grid key={tech.name} item sm={6} md={2}>
              <div className="about__technology">
                <Tooltip title={tech.name}>
                  <img className="about__technology-img" alt={tech.name} src={tech.image} />
                </Tooltip>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Section>
  )
}
