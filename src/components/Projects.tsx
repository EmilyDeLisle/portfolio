import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { ProjectDialog } from './ProjectDialog'
import { Section } from './Section'
import { projects } from '../data'

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0)
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <Section title="Projects" anchorId="projects-anchor">
      <div className="projects__container">
        <Grid container spacing={10}>
          {projects.map((project, index) => (
            <Grid key={project.name} item sm={12} md={6}>
              <div className="projects__project">
                <Tooltip title={project.name}>
                  <img
                    className="projects__project-img"
                    alt={project.name}
                    src={project.coverImage}
                    onClick={() => {
                      setSelectedProject(index)
                      setDialogOpen(true)
                    }}
                  />
                </Tooltip>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Typography variant='h6' align="center">
        For more projects, check out my{' '}
        <Link href="https://github.com/EmilyDeLisle" target="_blank" rel="noopener">
          GitHub
        </Link>
        .
      </Typography>
      <ProjectDialog
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        project={projects[selectedProject]}
      />
    </Section>
  )
}
