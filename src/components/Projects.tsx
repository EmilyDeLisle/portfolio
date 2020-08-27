import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { ProjectDialog } from './ProjectDialog'
import { Section } from './Section'
import { projects } from '../data'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hoverEffect: {
      '&:hover': {
        color: theme.palette.secondary.main,
        transition: '0.5s',
        cursor: 'pointer',
        textDecoration: 'none'
      },
    },
  })
)

export const Projects = () => {
  const classes = useStyles()
  const [selectedProject, setSelectedProject] = useState(0)
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <Section title="Projects" anchorId="projects-anchor">
      <Typography gutterBottom>
        Here are some of my favourite projects that I've done. They're projects I worked on either
        as part of the CST program, self-learning through freeCodeCamp, or personal projects I've
        done on my own time.
      </Typography>
      <Typography gutterBottom>
        Click on a project to see more images, some animations, as well as read more in-depth
        information about it.
      </Typography>
      <Typography gutterBottom>
        For more projects, check out my{' '}
        <Link className={classes.hoverEffect} href="https://github.com/EmilyDeLisle" target="_blank" rel="noopener">
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
