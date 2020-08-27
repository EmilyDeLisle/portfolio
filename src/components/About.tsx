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

import techCSS from '../assets/technologies/css.png'
import techFirebase from '../assets/technologies/firebase.png'
import techGit from '../assets/technologies/git.png'
import techHTML from '../assets/technologies/html.png'
import techJava from '../assets/technologies/java.png'
import techJQuery from '../assets/technologies/jquery.png'
import techJS from '../assets/technologies/js.png'
import techMaterial from '../assets/technologies/material.png'
import techPS from '../assets/technologies/ps.png'
import techPython from '../assets/technologies/python.png'
import techReact from '../assets/technologies/react.png'
import techTS from '../assets/technologies/ts.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hoverEffect: {
      '&:hover': {
        color: theme.palette.secondary.main,
        transition: '0.5s',
        cursor: 'pointer',
        textDecoration: 'none',
      },
    },
    photo: {
      border: `4px solid ${theme.palette.primary.main}`,
    },
    li: {
      fontFamily: 'Roboto',
      marginBottom: '0.5em',
    },
    link: {
      padding: 0,
    },
  })
)

const blurb = `I've taken a meandering path to where I am today - I’m not only a software developer. So far, I’ve been a 3D artist, graphic designer, cook, illustrator, and for the last ten years, a hospital pharmacy technician.

After my first taste of coding around 2017 I uncovered a passion for it. I started my journey with self-learning, doing projects for courses on [Codeacademy](https://www.codecademy.com/), [freeCodeCamp](https://www.freecodecamp.org/), and [Udemy](https://www.udemy.com/).

This wasn't enough for me. Looking for a more intensive, structured environment, I decided it was time for a pivot and dove in headfirst. I dropped my full-time line as a pharmacy technician and enrolled in the [Computer Systems Technology](https://www.bcit.ca/study/programs/5500dipma) program at the [British Columbia Institute of Technology](https://www.bcit.ca/).

The CST program implements a hands-on approach to learning. From day one I was creating some pretty cool things and taking part in fun and challenging collaborative projects. After my second term, I secured a sought-after co-op position as a junior frontend engineer at [Grow Technologies](https://www.linkedin.com/company/poweredbygrow). From April to December 2019 I had the privilege of working on some awesome stuff with the amazing team at Grow and really got to sink my teeth into [React](https://reactjs.org/). I was even along for the ride while Grow was [acquired](https://betakit.com/vancouver-based-grow-technologies-acquired-by-albertas-atb-financial/) by [ATB Financial](https://www.atb.com/), an experience I don't think many interns get.

Today, I'm completing my final term at BCIT, set to graduate in December 2020. I can’t wait to see what's next!`

const tidbits = `A couple extra litle tidbits about me:

- I love video games, especially MMORPGs.

- I also love games of the tabletop variety. Most recently I've been playing Burning Wheel.

- I'm an avid reader of science fiction and fantasy novels (I love the Expanse!)

- I have my Advanced Open Water Diver PADI certification. My favourite diving experience so far has been cenote diving in Mexico.

- I collect and care for tropical houseplants (mostly successfully...)

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
    name: 'jQuery',
    image: techJQuery,
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
          className: `${classes.link} ${classes.hoverEffect}`,
        },
      },
      p: { component: Typography, props: { paragraph: true, variant: 'body2' } },
      li: {
        component: 'li',
        props: {
          className: classes.li,
        },
      },
    },
  }

  return (
    <Section title="My life story" anchorId="about-anchor">
      <div className="about__me">
        <Grid container justify="center" spacing={4}>
          <Grid item sm={12} md={4}>
            <div className="about__photoContainer">
              <img
                className={`${classes.photo} about__photo`}
                alt="It's me, Emily!"
                src={portrait}
              />
            </div>
          </Grid>
          <Grid item sm={12} md={8}>
            <Markdown options={markdownOptions}>{blurb}</Markdown>
          </Grid>
          <Grid item sm={12} md={10}>
            <Markdown options={markdownOptions}>{tidbits}</Markdown>
          </Grid>
          <Grid item sm={12} md={2}>
            <div className="about__griffinContainer">
              <Tooltip title="reeeeeeeeeeeeee">
                <img
                  className={`${classes.photo} about__photo about__griffin`}
                  alt="Griffin"
                  src={griffin}
                />
              </Tooltip>
            </div>
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
