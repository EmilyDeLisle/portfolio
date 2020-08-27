import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TelegramIcon from '@material-ui/icons/Telegram'
import { Section } from './Section'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    photo: {
      border: `4px solid ${theme.palette.primary.main}`,
    },
    hoverEffect: {
      '&:hover': {
        color: theme.palette.secondary.main,
        transition: '0.5s',
        cursor: 'pointer',
      },
    },
  })
)

export const Contact = () => {
  const classes = useStyles()
  return (
    <Section title="Let's chat!" anchorId="contact-anchor">
      <Typography gutterBottom>
        Want to build something together? Don’t be shy!
      </Typography>
      <Typography gutterBottom>Get in touch with me via...</Typography>
      <div className='contact__methods'>
        <Button
          color="inherit"
          className={classes.hoverEffect}
          startIcon={<TelegramIcon />}
          onClick={() => {
            window.open('mailto:emily.delisle@gmail.com', '_blank')
          }}
        >
          Email
        </Button>
        <Button
          color="inherit"
          className={classes.hoverEffect}
          startIcon={<LinkedInIcon />}
          onClick={() => {
            window.open('https://www.linkedin.com/in/emily-delisle/', '_blank')
          }}
        >
          LinkedIn
        </Button>
      </div>
    </Section>
  )
}
