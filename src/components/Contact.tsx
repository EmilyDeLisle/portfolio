import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import MailIcon from '@material-ui/icons/Mail'
import { Section } from './Section'

export const Contact = () => {
  return (
    <Section title="Contact" anchorId="contact-anchor">
      <div className="contact__container">
        <Typography variant="h5" gutterBottom>
          Want to chat? Email me!
        </Typography>
        <Tooltip title="Send me an email!">
          <IconButton
            color="inherit"
            onClick={() => {
              window.open('mailto:emily.delisle@gmail.com', '_blank')
            }}
          >
            <MailIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Section>
  )
}
