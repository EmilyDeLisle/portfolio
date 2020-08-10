import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import BackIcon from '@material-ui/icons/ArrowBack'
import ForwardIcon from '@material-ui/icons/ArrowForward'
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
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const { name, description, images } = project
  const lastImageIndex = images.length - 1

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

  return (
    <Dialog fullScreen={fullScreen} open={open} fullWidth maxWidth="lg" onClose={handleClose}>
      <div className={`${classes.root} projectDialog__container`}>
        <Typography className={classes.title} variant="h3" color="primary">
          {name}
        </Typography>
        <div className="projectDialog__img-container">
          <div className="projectDialog__img-carousel">
            <Tooltip title="Previous image">
              <span>
                <IconButton color="inherit" disabled={selectedImage === 0} onClick={decrementImage}>
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
        </div>
        <DialogContent>{description}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  )
}