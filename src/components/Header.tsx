import React from 'react'
import AppBar from '@material-ui/core/AppBar'
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
      textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)',
    },
    name: {
      fontFamily: 'Leckerli One, cursive',
      color: '#EA1E5A',
    },
  })
)

export const Header = () => {
  const classes = useStyles()
  return (
    <div className={`${classes.header} ${classes.text} header`}>
      <AppBar>
        <Toolbar>
          <Typography>mle</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div className="header__contents">
        <div>
          <Typography className={classes.text} variant="h1" gutterBottom>
            Hi! I'm <span className={classes.name}>Emily DeLisle</span>.
          </Typography>
          <Typography className={classes.text} variant="h5">
            I'm a (soon-to-be) new graduate of the Computer Systems Technology program at the
            British Columbia Institute of Technology. I'm currently seeing a job as a software
            developer.
          </Typography>
        </div>
      </div>
    </div>
  )
}
