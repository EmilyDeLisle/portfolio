import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import EcoIcon from '@material-ui/icons/Eco'
import FaceIcon from '@material-ui/icons/Face'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
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
    tooltip: 'Who, exactly?',
    Icon: FaceIcon,
    anchor: '#about-anchor',
  },
  {
    title: 'Projects',
    tooltip: "Cool things I've worked on!",
    Icon: EcoIcon,
    anchor: '#projects-anchor',
  },
  {
    title: 'Contact',
    tooltip: 'Want to chat?',
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

            <Hidden smDown>
              {menuItems.map((menuItem) => {
                const { title, tooltip, Icon, anchor, url } = menuItem
                return (
                  <Tooltip key={title} title={!!tooltip ? tooltip : title}>
                    <Button
                      color="inherit"
                      className={classes.hoverEffect}
                      startIcon={<Icon/>}
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                        if (!!anchor) {
                          handleNavigationClick(event, anchor)
                        } else if (!!url) {
                          visitURL(url)
                        }
                      }}
                    >
                      {title}
                    </Button>
                  </Tooltip>
                )
              })}

              {/* <Typography
                className={`${classes.menuItem} ${classes.hoverEffect}`}
                variant="h5"
                onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                  handleNavigationClick(event, '#about-anchor')
                }
              >
                About
              </Typography>
              <Typography
                className={`${classes.menuItem} ${classes.hoverEffect}`}
                variant="h5"
                onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                  handleNavigationClick(event, '#projects-anchor')
                }
              >
                Projects
              </Typography>
              <Tooltip title="GitHub">
                <IconButton
                  className={`${classes.menuItem} ${classes.hoverEffect}`}
                  color="inherit"
                  onClick={() => visitURL('https://github.com/EmilyDeLisle')}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton
                  className={`${classes.menuItem} ${classes.hoverEffect}`}
                  color="inherit"
                  onClick={() => visitURL('https://www.linkedin.com/in/emily-delisle/')}
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip> */}
            </Hidden>
          </div>
          {/* <Hidden smDown>
            <Tooltip title="Send me an email!">
              <Button
                color="inherit"
                className={classes.hoverEffect}
                startIcon={<MailIcon/>}
                onClick={() => visitURL('mailto:emily.delisle@gmail.com')
                }
              >
                Contact
              </Button>
            </Tooltip>
          </Hidden> */}

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
                <MenuItem onClick={() => visitURL('https://github.com/EmilyDeLisle')}>
                  <ListItemIcon className={classes.listIcon}>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText>GitHub</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => visitURL('https://www.linkedin.com/in/emily-delisle/')}>
                  <ListItemIcon className={classes.listIcon}>
                    <LinkedInIcon />
                  </ListItemIcon>
                  <ListItemText>LinkedIn</ListItemText>
                </MenuItem>
                <MenuItem
                  onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                    handleNavigationClick(event, '#contact-anchor')
                  }}
                >
                  <ListItemIcon className={classes.listIcon}>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText>Email me</ListItemText>
                </MenuItem>
              </Menu>
            </div>
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  )
}
