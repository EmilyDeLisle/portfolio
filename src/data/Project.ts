import medManager from '../assets/medManager.png'

// MedManager assets
import medManager_1 from '../assets/projects/medManager/medManager_1.gif'
import medManager_2 from '../assets/projects/medManager/medManager_2.gif'
import medManager_3 from '../assets/projects/medManager/medManager_3.png'
import medManager_4 from '../assets/projects/medManager/medManager_4.png'
import medManager_5 from '../assets/projects/medManager/medManager_5.png'
import medManager_6 from '../assets/projects/medManager/medManager_6.png'
import medManager_7 from '../assets/projects/medManager/medManager_7.png'

// Plant Pal 1 assets
import plantPal1_1 from '../assets/projects/plantPal1/plantPal1-1.gif'
import plantPal1_2 from '../assets/projects/plantPal1/plantPal1-2.gif'
import plantPal1_3 from '../assets/projects/plantPal1/plantPal1-3.png'
import plantPal1_4 from '../assets/projects/plantPal1/plantPal1-4.png'
import plantPal1_5 from '../assets/projects/plantPal1/plantPal1-5.png'
import plantPal1_6 from '../assets/projects/plantPal1/plantPal1-6.png'

// PYCS Database App assets
import pycs_01 from '../assets/projects/pycs/pycs_01.gif'
import pycs_02 from '../assets/projects/pycs/pycs_02.gif'
import pycs_03 from '../assets/projects/pycs/pycs_03.gif'
import pycs_04 from '../assets/projects/pycs/pycs_04.gif'
import pycs_05 from '../assets/projects/pycs/pycs_05.png'
import pycs_06 from '../assets/projects/pycs/pycs_06.png'
import pycs_07 from '../assets/projects/pycs/pycs_07.png'
import pycs_08 from '../assets/projects/pycs/pycs_08.png'
import pycs_09 from '../assets/projects/pycs/pycs_09.png'
import pycs_10 from '../assets/projects/pycs/pycs_10.png'
import pycs_11 from '../assets/projects/pycs/pycs_11.png'
import pycs_12 from '../assets/projects/pycs/pycs_12.png'
import pycs_13 from '../assets/projects/pycs/pycs_13.png'

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
    coverImage: plantPal1_3,
    images: [plantPal1_2, plantPal1_3, plantPal1_4, plantPal1_5],
  },
  {
    name: 'PYCS Database App',
    description: 'Description',
    coverImage: pycs_07,
    images: [
      pycs_01,
      pycs_02,
      pycs_03,
      pycs_04,
      pycs_05,
      pycs_06,
      pycs_07,
      pycs_08,
      pycs_09,
      pycs_10,
      pycs_11,
      pycs_12,
      pycs_13,
    ],
  },
  {
    name: 'Draw',
    description: 'Description',
    coverImage: plantPal1_3,
    images: [plantPal1_2],
  },
  {
    name: 'Chess',
    description: 'Description',
    coverImage: plantPal1_3,
    images: [plantPal1_2],
  },
  {
    name: 'Plant Pal 1',
    description: 'Description',
    coverImage: plantPal1_3,
    images: [plantPal1_1, plantPal1_2, plantPal1_3, plantPal1_4, plantPal1_5, plantPal1_6],
  },
  {
    name: 'MedManager',
    description: 'Description',
    coverImage: medManager_3,
    images: [medManager_1, medManager_2, medManager_3, medManager_4, medManager_5, medManager_6, medManager_7],
  },
  {
    name: 'Weather App',
    description: 'Description',
    coverImage: weather,
    images: [weather],
  },
]
