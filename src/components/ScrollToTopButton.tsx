import React from 'react'
import Fab from '@material-ui/core/Fab'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Zoom from '@material-ui/core/Zoom'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { NavigationComponentProps } from './NavigationComponent'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
)

export const ScrollToTopButton = ({ handleNavigationClick }: NavigationComponentProps) => {
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <Zoom in={trigger}>
      <div
        onClick={(event: React.MouseEvent<HTMLDivElement>) =>
          handleNavigationClick(event, '#back-to-top-anchor')
        }
        role="presentation"
        className={classes.root}
      >
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  )
}
