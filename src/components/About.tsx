import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Section } from './Section'
import portrait from '../assets/photo.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    photo: {
      border: `4px solid ${theme.palette.primary.main}`,
    },
  })
)

export const About = () => {
  const classes = useStyles()
  return (
    <Section title="About" anchorId="about-anchor">
      <div className="about__contents">
        <div className="about__photo-container">
          <img className={`${classes.photo} about__photo`} alt="Portrait of Emily" src={portrait} />
        </div>
        <div className="about__text">
          <Typography>
            I've taken a meandering path to becoming a developer. I've been a 3D artist, graphic
            designer, cook, illustrator, and most recently, a hospital pharmacy technician.
            <br />
            <br />
            While pharmacy has been a rewarding career for the last few years, I found that I needed
            something a little more fast-paced and where I could constantly be learning new things.
            I tried my hand at learning to code on my own as I have always been a technical-minded
            person. I found I needed more structure, and so I dove headfirst into the Computer
            Systems Technology program at BCIT. It's been challenging, but very rewarding, as I have
            learned a ton in a very short amount of time.
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
    </Section>
  )
}
