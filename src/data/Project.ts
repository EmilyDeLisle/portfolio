// Chess assets
import chess_01 from '../assets/projects/chess/chess_01.gif'
import chess_02 from '../assets/projects/chess/chess_02.gif'
import chess_03 from '../assets/projects/chess/chess_03.png'
import chess_04 from '../assets/projects/chess/chess_04.png'

// Draw assets
import draw_01 from '../assets/projects/draw/draw_01.gif'
import draw_02 from '../assets/projects/draw/draw_02.gif'
import draw_03 from '../assets/projects/draw/draw_03.gif'
import draw_04 from '../assets/projects/draw/draw_04.png'

// MedManager assets
import medManager_01 from '../assets/projects/medManager/medManager_01.gif'
import medManager_02 from '../assets/projects/medManager/medManager_02.gif'
import medManager_03 from '../assets/projects/medManager/medManager_03.png'
import medManager_04 from '../assets/projects/medManager/medManager_04.png'
import medManager_05 from '../assets/projects/medManager/medManager_05.png'
import medManager_06 from '../assets/projects/medManager/medManager_06.png'
import medManager_07 from '../assets/projects/medManager/medManager_07.png'

// Plant Pal 1 assets
import plantPal1_01 from '../assets/projects/plantPal1/plantPal1_01.gif'
import plantPal1_02 from '../assets/projects/plantPal1/plantPal1_02.gif'
import plantPal1_03 from '../assets/projects/plantPal1/plantPal1_03.png'
import plantPal1_04 from '../assets/projects/plantPal1/plantPal1_04.png'
import plantPal1_05 from '../assets/projects/plantPal1/plantPal1_05.png'
import plantPal1_06 from '../assets/projects/plantPal1/plantPal1_06.png'

// Plant Pal 2 assets
import plantPal2_01 from '../assets/projects/plantPal2/plantPal2_01.gif'
import plantPal2_02 from '../assets/projects/plantPal2/plantPal2_02.gif'
import plantPal2_03 from '../assets/projects/plantPal2/plantPal2_03.gif'
import plantPal2_04 from '../assets/projects/plantPal2/plantPal2_04.gif'
import plantPal2_05 from '../assets/projects/plantPal2/plantPal2_05.gif'
import plantPal2_06 from '../assets/projects/plantPal2/plantPal2_06.png'
import plantPal2_07 from '../assets/projects/plantPal2/plantPal2_07.png'
import plantPal2_08 from '../assets/projects/plantPal2/plantPal2_08.png'
import plantPal2_09 from '../assets/projects/plantPal2/plantPal2_09.png'
import plantPal2_10 from '../assets/projects/plantPal2/plantPal2_10.png'
import plantPal2_11 from '../assets/projects/plantPal2/plantPal2_11.png'
import plantPal2_12 from '../assets/projects/plantPal2/plantPal2_12.png'
import plantPal2_13 from '../assets/projects/plantPal2/plantPal2_13.png'

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

import weather_1 from '../assets/projects/weather/weather_1.gif'
import weather_2 from '../assets/projects/weather/weather_2.png'

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
    coverImage: plantPal2_06,
    images: [
      plantPal2_01,
      plantPal2_02,
      plantPal2_03,
      plantPal2_04,
      plantPal2_05,
      plantPal2_06,
      plantPal2_07,
      plantPal2_08,
      plantPal2_09,
      plantPal2_10,
      plantPal2_11,
      plantPal2_12,
      plantPal2_13,
    ],
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
    coverImage: draw_04,
    images: [draw_01, draw_02, draw_03, draw_04],
  },
  {
    name: 'Chess',
    description: 'Description',
    coverImage: chess_03,
    images: [chess_01, chess_02, chess_03, chess_04],
  },
  {
    name: 'Plant Pal 1',
    description: 'Description',
    coverImage: plantPal1_03,
    images: [plantPal1_01, plantPal1_02, plantPal1_03, plantPal1_04, plantPal1_05, plantPal1_06],
  },
  {
    name: 'MedManager',
    description: 'Description',
    coverImage: medManager_03,
    images: [
      medManager_01,
      medManager_02,
      medManager_03,
      medManager_04,
      medManager_05,
      medManager_06,
      medManager_07,
    ],
  },
  {
    name: 'Weather App',
    description: 'Description',
    coverImage: weather_2,
    images: [weather_1, weather_2],
  },
]
