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

// Weather assets
import weather_1 from '../assets/projects/weather/weather_1.gif'
import weather_2 from '../assets/projects/weather/weather_2.png'

export interface Project {
  name: string
  description: string
  coverImage: string
  images: string[]
  repo: string
  url?: string
}

export const projects: Project[] = [
  {
    name: 'Plant Pal 2',
    description: `This application is a redesign of my previous JavaScript- and jQuery-based plant watering app, Plant Pal. For this project, I wanted to utilize the skills I'd gained and technologies I've learned thus far in the Computer Systems Technology program at BCIT as well as what I'd learned on my eight-month co-op as a front end engineer at Grow Technologies (acquired by ATB Financial).
    
This version of Plant Pal is completely rebuilt and uses almost the entire suite of products from Firebase, including Cloud Firestore, Cloud Functions, user authentication, storage, and hosting. The front end is built in TypeScript using React and Material-UI for the user interface and MobX for state management. Firebase provides the API to interact with the database in Cloud Firestore, and I added a couple cloud functions to do some additional back end work.

Plant Pal now supports searching for plants by name as well as sorting in several different ways. It prioritizes, by default, plants that require water based on their specific watering needs, rather than just by time since last watered. On top of watering tracking, Plant Pal now tracks how often the the plant is fertilized. Users can upload images of their plants, as well as edit all the plant's details, including the name, image, and watering and fertlizing events.

The app is fully responsive, and will accept images taken on a user's phone as well as uploaded from their computer.`,
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
    repo: 'https://github.com/EmilyDeLisle/plant_pal',
    url: 'https://plant-pal.com',
  },
  {
    name: 'PYCS Database App',
    description: `The Pathfinder Youth Centre Society Database Application was a collaborative student project I worked on alongside four other students for the BCIT Industry-Sponsored Student Project program in term 3 of the Computer Systems Technology program. This project was completed over a five-week period in April-May 2020.
     
[Pathfinder Youth Centre Society](https://www.canadahelps.org/en/charities/pathfinder-youth-centre-society/) is a local non-profit organization that provides mentorship and job training to at-risk young people in the British Columbia Lower Mainland. The goal was to provide Pathfinder with a database that was remotely-accessible accross their three locations. Because Pathfinder was going to store very senstive information like social insurance numbers in this database, the data needed to be secure. We also wanted to come up with a solution that would run on its on and require no maintenance. 
     
Because of these requirements, our team opted to go with storing the data on Firebase Cloud Firestore and secured it with Firebase user authentication. Firebase provided the hosting for the final project. The front end was written in JavaScript with React and Material-UI for the user interface and MobX for state management.
     
The app allows PYCS staff to manage participant records. They can create, look up, edit, and add notes to records. The records keep a detailed history of every change made to them. The app allows sorting and searching of participant records, as well as archiving old records. The app also has a second portal that leads to a web form used by potential participants to enrol themselves into PYCS's database. These new applications appear in a separate section in the database app that staff members can review and either accept or discard.
     
This project was featured in July 2020 in [BCIT News](https://commons.bcit.ca/news/2020/07/issp-pathfinder-youth-centre-society/).`,
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
    repo: 'https://github.com/EmilyDeLisle/pycs_database',
  },
  {
    name: 'Draw',
    description: `Draw is an Object-Oriented Programming final project I did in term 2 of the Computer Systems Technology program at BCIT. The goal was to demonstrate all of the principles of OOP practiced throughout the term and create a fully-funtional drawing application using Java and JavaFX. 
    
The program lets the user draw several different shapes, including a freeform polygon shape, in the colour of their choice. The user can also move and delete any shape they have drawn. The application manages a stack of shapes to correctly layer them on top of one another, but also allows the user to click on and move or delete specific shapes.`,
    coverImage: draw_04,
    images: [draw_01, draw_02, draw_03, draw_04],
    repo: 'https://github.com/EmilyDeLisle/draw',
  },
  {
    name: 'Chess',
    description: `Chess is an Object-Oriented Programming project I did in term 2 of the Computer Systems Technology program at BCIT.
    
The goal was to utilize the OOP principles of inheritance, polymorphism, and abstraction to recreate Chess using Java. The secondary goal was to use serialization to enable saving and loading game data, restoring the game to a previously-saved state. The graphical user interface is made using the JavaFX library.`,
    coverImage: chess_03,
    images: [chess_01, chess_02, chess_03, chess_04],
    repo: 'https://github.com/EmilyDeLisle/chess',
  },
  {
    name: 'Plant Pal 1',
    description: `Plant Pal is an app used to manage and store data about houseplants and when they were watered. The user adds plants to their database which then keeps track of the last time the plant was watered as well as calculating the average time between waterings for each plant. The app also uses the Moment and FullCalendar libraries to display plant watering events in a calendar view.
    
The data is stored in a Firebase Realtime Database and is served with Node.js with Express and Firebase Cloud Functions. The front end is created using Bootstrap with functions written with jQuery. The app also uses Firebase user authentication.`,
    coverImage: plantPal1_03,
    images: [plantPal1_01, plantPal1_02, plantPal1_03, plantPal1_04, plantPal1_05, plantPal1_06],
    repo: 'https://github.com/EmilyDeLisle/PlantPal_v1',
    url: 'https://plant-pal-ae41e.firebaseapp.com/',
  },
  {
    name: 'MedManager',
    description: `MedManager is a collaborative student project worked on by myself and two other students in term 1 of the Computer Systems Technology program at BCIT.
    
MedManager is an app used to manage daily medication dosing. It tracks dosing times for various medications entered by the user and reminds them when they are close to or past a dosing time. It also stores contact information for the user's pharmacy.
    
The app stores its data on Firebase Realtime Database and utilizes Firebase user authentication to secure user information.`,
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
    repo: 'https://github.com/CiaraSouthgate/MedManager',
    url: 'https://medmanager-9a443.firebaseapp.com/',
  },
  {
    name: 'Weather App',
    description: `This app displays weather local to the user uses Google Geocoding and Dark Sky APIs. The animated weather icons are SkyCons by Dark Sky. The app is served using Node.js and Express and deployed to Heroku.`,
    coverImage: weather_2,
    images: [weather_1, weather_2],
    repo: 'https://github.com/EmilyDeLisle/Weather',
    url: 'https://mle-weather.herokuapp.com/',
  },
]
