import React from 'react'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Section } from './Section'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    photo: {
      border: `4px solid ${theme.palette.primary.main}`,
    },
  })
)


export const Contact = () => {
  const classes = useStyles()
  const fullScreen = useMediaQuery(useTheme().breakpoints.down('sm'))
  return (
    <Section title="Let's chat!" anchorId="contact-anchor">
      Contact
    </Section>
  )
}
