import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MoreIcon from '@material-ui/icons/MoreVert'
import { MleIcon } from '../assets/MleIcon'
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
    menu: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: theme.palette.primary.contrastText,
    },
  })
)

export const TopNavBar = ({ handleNavigationClick }: NavigationComponentProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const classes = useStyles()

  const visitURL = (url: string) => {
    window.open(url, '_blank')
  }

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <div className="topNavBar__container">
          <div className="topNavBar__menuItems">
            <IconButton
              className={classes.icon}
              edge="start"
              color="primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                handleNavigationClick(event, '#back-to-top-anchor')
              }
            >
              <MleIcon />
            </IconButton>

            <Hidden smDown>
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
              <IconButton
                className={classes.menuItem}
                color="inherit"
                onClick={() => visitURL('https://github.com/EmilyDeLisle')}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                className={classes.menuItem}
                color="inherit"
                onClick={() => visitURL('https://www.linkedin.com/in/emily-delisle/')}
              >
                <LinkedInIcon />
              </IconButton>
            </Hidden>
          </div>
          <Hidden mdUp>
            <div>
              <IconButton color="primary" edge="end" onClick={handleClickMenu}>
                <MoreIcon />
              </IconButton>
              <Menu
                MenuListProps={{
                  className: classes.menu,
                }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem
                  onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                    handleNavigationClick(event, '#about-anchor')
                  }}
                >
                  About
                </MenuItem>
                <MenuItem
                  onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                    handleNavigationClick(event, '#projects-anchor')
                  }}
                >
                  Projects
                </MenuItem>
                <MenuItem
                  onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                    handleNavigationClick(event, '#contact-anchor')
                  }}
                >
                  Contact
                </MenuItem>
                <MenuItem onClick={() => visitURL('https://github.com/EmilyDeLisle')}>
                  <GitHubIcon />
                </MenuItem>
                <MenuItem onClick={() => visitURL('https://www.linkedin.com/in/emily-delisle/')}>
                  <LinkedInIcon />
                </MenuItem>
              </Menu>
            </div>
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  )
}
