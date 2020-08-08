import React, { ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.contrastText
    }
  })
)

interface SectionProps {
  children: ReactNode
  title: string
  anchorId: string
}

export const Section = ({ children, title, anchorId }: SectionProps) => {
  const classes = useStyles()
  return (
    <section id={anchorId} className={`${classes.root} section`}>
      <Typography variant="h3" color="primary" gutterBottom>
        {title}
      </Typography>
      {children}
    </section>
  )
}
