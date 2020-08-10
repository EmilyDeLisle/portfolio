import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { ProjectDialog } from './ProjectDialog'
import { Section } from './Section'
import { projects } from '../data'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    photo: {
      border: `4px solid ${theme.palette.primary.main}`,
    },
  })
)

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0)
  const [dialogOpen, setDialogOpen] = useState(false)

  const classes = useStyles()
  return (
    <Section title="Projects" anchorId="projects-anchor">
      <div className="projects__container">
        <Grid container spacing={10}>
          {projects.map((project, index) => (
            <Grid key={project.name} item sm={12} md={6}>
              <div className="projects__project">
                <img
                  className="projects__project-img"
                  alt={project.name}
                  src={project.coverImage}
                  onClick={() => {
                    setSelectedProject(index)
                    setDialogOpen(true)
                  }}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Typography align="center">For more projects, check out my GitHub</Typography>
      <ProjectDialog
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        project={projects[selectedProject]}
      />
    </Section>
  )
}
