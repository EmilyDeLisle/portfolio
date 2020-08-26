import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      color: theme.palette.primary.contrastText,
    },
    text: {
      fontWeight: 500,
      textShadow: '2px 2px 6px rgba(0, 0, 0, 1)',
    },
    name: {
      fontFamily: 'Leckerli One, cursive',
      color: theme.palette.primary.main,
    },
    subtitle: {
      fontFamily: 'Roboto, sans-serif',
    },
  })
)

export const Header = () => {
  const classes = useStyles()
  return (
    <div className={`${classes.header} ${classes.text} header`}>
      <Toolbar id="back-to-top-anchor" />
      <div className="header__contents">
        <div>
          <Typography className={classes.text} variant="h1">
            Hi! I'm <span className={classes.name}>Emily DeLisle</span>.
          </Typography>
          <Typography className={`${classes.text} ${classes.subtitle}`} variant="h5" gutterBottom>
            Software Engineer | Illustrator | Plant-Whisperer | Bird-Tamer
          </Typography>
          <Typography className={classes.text} variant="h6">
            I'm also a (soon-to-be) new grad of the Computer Systems Technology program at the
            British Columbia Institute of Technology.
          </Typography>
        </div>
      </div>
    </div>
  )
}
