import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export const Header = () => {
  return (
    <div className="header">
      <AppBar>
        <Toolbar>
          <Typography>mle</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div className="header__contents">
        <div>
          <Typography variant="h1">Hi! I'm Emily DeLisle.</Typography>
          <Typography variant="h5">
            I'm a (soon-to-be) new graduate of the Computer Systems Technology program at the
            British Columbia Institute of Technology. I'm currently seeing a job as a software
            developer.
          </Typography>
        </div>
      </div>
    </div>
  )
}
