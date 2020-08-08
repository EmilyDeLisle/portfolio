import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import PawIcon from '@material-ui/icons/Pets'
import { NavigationComponentProps } from './NavigationComponent'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderBottom: `5px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.contrastText,
    },
    icon: {
      marginRight: theme.spacing(4),
    },
    menuItem: {
      marginRight: theme.spacing(4),
      '&:hover': {
        color: theme.palette.secondary.main,
        transition: '0.5s',
        cursor: 'pointer',
      },
    },
  })
)

export const TopNavBar = ({ handleNavigationClick }: NavigationComponentProps) => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton className={classes.icon} edge="start" color="primary">
          <PawIcon />
        </IconButton>
        <Typography
          className={classes.menuItem}
          variant="h5"
          onClick={(event: React.MouseEvent<HTMLDivElement>) =>
            handleNavigationClick(event, '#about-anchor')
          }
        >
          About
        </Typography>
        <Typography
          className={classes.menuItem}
          variant="h5"
          onClick={(event: React.MouseEvent<HTMLDivElement>) =>
            handleNavigationClick(event, '#projects-anchor')
          }
        >
          Projects
        </Typography>
        <Typography
          className={classes.menuItem}
          variant="h5"
          onClick={(event: React.MouseEvent<HTMLDivElement>) =>
            handleNavigationClick(event, '#contact-anchor')
          }
        >
          Contact
        </Typography>
        <Typography className={classes.menuItem} variant="h5">
          LinkedIn
        </Typography>
        <Typography className={classes.menuItem} variant="h5">
          GitHub
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
