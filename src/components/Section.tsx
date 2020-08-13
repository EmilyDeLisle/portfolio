import React, { ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.contrastText
    },
    title: {
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
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
    <section className={`${classes.root} section`}>
      <span id={anchorId}/>
      <Typography className={classes.title} variant="h3" color="primary" gutterBottom>
        {title}
      </Typography>
      {children}
    </section>
  )
}
