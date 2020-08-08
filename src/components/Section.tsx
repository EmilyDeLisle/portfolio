import React, { ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'

interface SectionProps {
  children: ReactNode
  title: string
  anchorId: string
}

export const Section = ({ children, title, anchorId }: SectionProps) => {
  return (
    <section id={anchorId} className='section__container'>
      <Typography variant="h2" color="primary" gutterBottom>
        {title}
      </Typography>
      {children}
    </section>
  )
}
