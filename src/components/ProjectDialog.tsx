import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import BackIcon from '@material-ui/icons/ArrowBack'
import ForwardIcon from '@material-ui/icons/ArrowForward'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import Markdown, { MarkdownOptions } from 'markdown-to-jsx'
import { Project } from '../data'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.contrastText,
    },
    title: {
      margin: theme.spacing(2),
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    link: {
      padding: 0,
      fontSize: 'initial',
    },
  })
)

interface ProjectDialogProps {
  handleClose: () => void
  open: boolean
  project: Project
}

export const ProjectDialog = ({ handleClose, open, project }: ProjectDialogProps) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const classes = useStyles()
  const fullScreen = useMediaQuery(useTheme().breakpoints.down('sm'))
  const { name, description, images, repo, url } = project
  const lastImageIndex = images.length - 1

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
      p: { component: Typography, props: { paragraph: true } },
    },
  }

  const incrementImage = () => {
    if (selectedImage < lastImageIndex) {
      setSelectedImage(selectedImage + 1)
    }
  }

  const decrementImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const visitURL = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <Dialog fullScreen={fullScreen} open={open} fullWidth maxWidth="lg" onClose={handleClose}>
      <div className={`${classes.root} projectDialog__container`}>
        <Typography className={classes.title} variant="h3" color="primary">
          {name}
        </Typography>
        <div className="projectDialog__img-container">

          <Hidden smDown>
            <div className="projectDialog__img-carousel">
              <Tooltip title="Previous image">
                <span>
                  <IconButton
                    color="inherit"
                    disabled={selectedImage === 0}
                    onClick={decrementImage}
                  >
                    <BackIcon />
                  </IconButton>
                </span>
              </Tooltip>
              <img className="projectDialog__img" alt={name} src={images[selectedImage]} />
              <Tooltip title="Next image">
                <span>
                  <IconButton
                    color="inherit"
                    disabled={selectedImage === lastImageIndex}
                    onClick={incrementImage}
                  >
                    <ForwardIcon />
                  </IconButton>
                </span>
              </Tooltip>
            </div>
          </Hidden>

          <Hidden mdUp>
            <div className="projectDialog__img-carousel-mobile">
              <img className="projectDialog__img" alt={name} src={images[selectedImage]} />
              <div>
                <IconButton color="inherit" disabled={selectedImage === 0} onClick={decrementImage}>
                  <BackIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  disabled={selectedImage === lastImageIndex}
                  onClick={incrementImage}
                >
                  <ForwardIcon />
                </IconButton>
              </div>
            </div>
          </Hidden>
        </div>
        <div className="projectDialog__description">
          <DialogContent>
            <Markdown options={markdownOptions}>{description}</Markdown>
          </DialogContent>
        </div>
        <DialogActions>
          {!!url && (
            <Tooltip title="Launch app" placement="top">
              <IconButton color="primary" onClick={() => visitURL(url)}>
                <LaunchIcon />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="View code" placement="top">
            <IconButton color="primary" onClick={() => visitURL(repo)}>
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Button
            autoFocus
            onClick={() => {
              setSelectedImage(0)
              handleClose()
            }}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  )
}
