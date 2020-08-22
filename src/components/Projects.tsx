import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { ProjectDialog } from './ProjectDialog'
import { Section } from './Section'
import { projects } from '../data'

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0)
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <Section title="Projects" anchorId="projects-anchor">
      <Typography gutterBottom>
        Here are some of my favourite projects that I've worked on. They're projects I worked on as
        part of the CST program, self-learning through freeCodeCamp, or personal projects I've done
        on my own.
      </Typography>
      <Typography gutterBottom>
        Click on a project to see more images, some animations, as well as read more in-depth
        information about it.
      </Typography>
      <Typography gutterBottom>
        For more projects, check out my{' '}
        <Link href="https://github.com/EmilyDeLisle" target="_blank" rel="noopener">
          GitHub
        </Link>
        .
      </Typography>
      <div className="projects__container">
        <Grid container justify="center" spacing={10}>
          {projects.map((project, index) => {
            const { name, coverImage } = project
            return (
              <Grid key={name} item sm={12} md={6}>
                <div className="projects__project">
                  <div
                    className="projects__project-box"
                    onClick={() => {
                      setSelectedProject(index)
                      setDialogOpen(true)
                    }}
                  >
                    <img className="projects__project-img" alt={name} src={coverImage} />
                    <Typography align="center">{name}</Typography>
                  </div>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
      <ProjectDialog
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        project={projects[selectedProject]}
      />
    </Section>
  )
}
