import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: 0,
      height: '1px',
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), ${theme.palette.primary.main}, rgba(0, 0, 0, 0))`,
    },
  })
)

export const Rule = () => {
  const classes = useStyles()
  return <hr className={classes.root} />
}
