import medManager from '../assets/medManager.png'
import plantPal1 from '../assets/plantPal1.png'
import weather from '../assets/weather.png'

export interface Project {
  name: string
  description: string
  coverImage: string
  images: string[]
}

/*
Projects:

- Plant Pal 2
- PYCS app
- Draw
- Chess
- Plant Pal 1
- MedManager
- Weather

Maybe:
- Random quote
- Wikipedia
- Pokeretriever
*/

export const projects: Project[] = [
  {
    name: 'Plant Pal 2',
    description: 'Description',
    coverImage: plantPal1,
    images: [plantPal1]
  },
  {
    name: 'PYCS Database App',
    description: 'Description',
    coverImage: plantPal1,
    images: [plantPal1]
  },
  {
    name: 'Draw',
    description: 'Description',
    coverImage: plantPal1,
    images: [plantPal1]
  },
  {
    name: 'Chess',
    description: 'Description',
    coverImage: plantPal1,
    images: [plantPal1]
  },
  {
    name: 'Plant Pal 1',
    description: 'Description',
    coverImage: plantPal1,
    images: [plantPal1]
  },
  {
    name: 'MedManager',
    description: 'Description',
    coverImage: medManager,
    images: [medManager]
  },
  {
    name: 'Weather App',
    description: 'Description',
    coverImage: weather,
    images: [weather]
  },
]