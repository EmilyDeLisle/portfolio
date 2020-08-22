import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import EcoIcon from '@material-ui/icons/Eco'
import FaceIcon from '@material-ui/icons/Face'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MoreIcon from '@material-ui/icons/MoreVert'
import TelegramIcon from '@material-ui/icons/Telegram'
import { MleIcon } from '../assets/MleIcon'
import { NavigationComponentProps } from './NavigationComponent'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderBottom: `5px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.contrastText,
    },
    buttonText: {
      marginLeft: '0.5em',
    },
    hoverEffect: {
      '&:hover': {
        color: theme.palette.secondary.main,
        transition: '0.5s',
        cursor: 'pointer',
      },
    },
    listIcon: {
      color: theme.palette.primary.contrastText,
    },
    menuItem: {
      marginRight: theme.spacing(4),
    },
    menu: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: theme.palette.primary.contrastText,
    },
  })
)

const menuItems = [
  {
    title: 'About',
    Icon: FaceIcon,
    anchor: '#about-anchor',
  },
  {
    title: 'Projects',
    Icon: EcoIcon,
    anchor: '#projects-anchor',
  },
  {
    title: 'Contact',
    Icon: TelegramIcon,
    anchor: '#contact-anchor',
  },
  {
    title: 'GitHub',
    Icon: GitHubIcon,
    url: 'https://github.com/EmilyDeLisle',
  },
  {
    title: 'LinkedIn',
    Icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/emily-delisle/',
  },
]

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
              className={classes.menuItem}
              edge="start"
              color="primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                handleNavigationClick(event, '#back-to-top-anchor')
              }
            >
              <MleIcon />
            </IconButton>

            {/* Fullscreen menu */}
            <Hidden smDown>
              {menuItems.map((menuItem) => {
                const { title, Icon, anchor, url } = menuItem
                return (
                  <div
                    className={`${classes.hoverEffect} topNavBar__button`}
                    onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                      if (!!anchor) {
                        handleNavigationClick(event, anchor)
                      } else if (!!url) {
                        visitURL(url)
                      }
                    }}
                  >
                    <Icon />
                    <Typography className={classes.buttonText} variant="caption">
                      {title}
                    </Typography>
                  </div>
                )
              })}
            </Hidden>
          </div>

          {/* Mobile menu */}
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
                {menuItems.map((menuItem) => {
                  const { title, Icon, anchor, url } = menuItem
                  return (
                    <MenuItem
                      onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                        if (!!anchor) {
                          handleNavigationClick(event, anchor)
                        } else if (!!url) {
                          visitURL(url)
                        }
                      }}
                    >
                      <ListItemIcon className={classes.listIcon}>
                        <Icon />
                      </ListItemIcon>
                      <Typography variant='button'>{title}</Typography>
                    </MenuItem>
                  )
                })}
              </Menu>
            </div>
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  )
}
