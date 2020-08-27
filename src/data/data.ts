import { Project } from './Project'

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

export const projects: Project[] = [
  {
    name: 'Plant Pal 2',
    description: `This application is a redesign of my previous JavaScript- and [jQuery](https://jquery.com/)-based plant-watering app, **Plant Pal**. For this project, I wanted to utilize the skills I'd gained and technologies I've learned thus far in the Computer Systems Technology program at BCIT as well as what I'd learned during co-op as a junior frontend engineer at [Grow Technologies](https://www.linkedin.com/company/poweredbygrow) (acquired by [ATB Financial](https://www.atb.com/)).

The problem I ran into with the first version of **Plant Pal** was that as I acquired more and more plants (that didn't die!), I found it difficult to find them in the long list of plants, as there was no way to sort or search for them. I ended up switching over to using a spreadsheet, as I could then sort by name and date last watered. This still wasn't ideal, as while I could sort the plants by the amount of days since I last watered them, some plants, like succulents, really didn't need to be watered as often as, say, my *very* needy peace lily.

Enter **Plant Pal (version 2)**. This version of **Plant Pal** is completely rebuilt and uses almost the entire suite of products from [Firebase](https://firebase.google.com/), including [Cloud Firestore](https://firebase.google.com/products/firestore), [Cloud Functions](https://firebase.google.com/products/functions), [Authentication](https://firebase.google.com/products/auth), [Storage](https://firebase.google.com/products/storage), and [Hosting](https://firebase.google.com/products/hosting). This time, I built the frontend in [TypeScript](https://www.typescriptlang.org/) using [React](https://reactjs.org/) and [Material-UI](https://material-ui.com/) for the user interface and [MobX](https://mobx.js.org/) for state management. I also used [Moment.js](https://momentjs.com/) to help with formatting some of the dates and to calculate time differences. Firebase provides the API to interact with the database in Cloud Firestore, and I added a couple Cloud Functions to do some additional backend work, like calculating watering and fertilizing intervals.

The new-and-improved **Plant Pal** now calculates watering *and* fertilizing dates and intervals. Plants can be searched for and sorted in several different ways. The app sorts, by default, plants that require water most urgently based on their specific watering needs (using their average watering interval), rather than just by time since last watered. It can also sort the list of plants by name or date last fertilized or watered.

Users can upload images of their plants, as well as edit all the plant's details, including the name, image, and watering and fertlizing events. The app is fully responsive, and will accept images taken on a user's phone as well as uploaded from their computer.

Building **Plant Pal 2** has been especilly rewarding as I can really see how far I've come since I built the first version. It's also made a huge difference in my plant-watering routine!`,
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
    description: `The **Pathfinder Youth Centre Society Database Application** was a collaborative student project I worked on alongside four other students for the BCIT [Industry-Sponsored Student Project](https://www.bcit.ca/computing-academic-studies/industry-sponsored-student-projects/) program in term 3 of the Computer Systems Technology program. This project was completed over a five-week period in April-May 2020, and was featured in July 2020 in [BCIT News](https://commons.bcit.ca/news/2020/07/issp-pathfinder-youth-centre-society/).
     
[Pathfinder Youth Centre Society](https://www.pathfinderyouthsociety.org/) is a local non-profit organization that provides mentorship and job training to at-risk young people in the British Columbia Lower Mainland. Up until this project, they managed their participants' files and information using paper records and Excel spreadsheets. The goal was to provide Pathfinder with a database that was remotely-accessible across their three locations, and an interface to manage their data eith ease. Because Pathfinder was going to store very senstive information like social insurance numbers in this database, the data needed to be secure. We also wanted to come up with a solution that would run on its on and require no IT maintenance. 
     
Because of these requirements, our team opted to go with storing the data in a NoSQL database with [Firebase Cloud Firestore](https://firebase.google.com/products/firestore) and secured it with [Firebase Authentication](https://firebase.google.com/products/auth). The frontend was built with [React](https://reactjs.org/) and [Material-UI](https://material-ui.com/) for the user interface and [MobX](https://mobx.js.org/) for state management. We also used [Formik](https://formik.org/) with [Yup](https://github.com/jquense/yup) to manage the forms.
     
The app allows PYCS staff to manage participant records. They can create, look up, edit, and add notes to records. The records keep a detailed history of every change made to them. The app allows sorting and searching of participant records, as well as archiving old records. The app also has a second portal that leads to a web form used by potential participants to enrol themselves into PYCS's database. These new applications appear in a separate section in the database app that staff members can review and either accept or discard.

One part of the app that I designed that I am particularly proud of is that the app uses a single source of truth for its fields. The fields of the web form used by participants, the fields and participant data within the app, as well as the form initial values are all derived from a list of field objects. This makes the form fields easily modifiable and scaleable, allowing PYCS to update their form and change around the fields without needing to completely overhaul the form's code.

This project was also gratifying for me because, as the member of the team with the most frontend experience having just completed my co-op as a junior frontend engineer at [Grow Technologies](https://www.linkedin.com/company/poweredbygrow)/[ATB Financial](https://www.atb.com/), I was able to share my knowledge with my peers and directly apply some of the things I learned during that time about React, project structure, forms, and more.`,
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
    url: 'https://pathfinderyouthsociety.web.app/',
  },
  {
    name: 'Draw',
    description: `**Draw** is an Object-Oriented Programming project I did in term 2 of the Computer Systems Technology program at BCIT. The goal was to demonstrate all of the principles of OOP practiced throughout the term and design and code a fully-functional drawing application from the ground up using Java and JavaFX.

The program lets the user draw several different shapes in the colour of their choice. The user can also move and delete any shape they have drawn.

The challenge was to manage the stack of shapes, using data structures (I used an ArrayDeque) ,to correctly layer them on top of one another. The user must be able to click on a particular shape and be able to select and manipulate that shape, no matter its position within the stack.

Another challenge was to show the illusion of the shape growing, stretching, and moving, but only on its particular layer, leaving the other shapes alone. This was done by repeatedly drawing and clearing the canvas of each shapes' layer as it's drawn.

To take it one step further, I added a freeform polygon shape. The polygon is drawn by clicking points on the screen, drawing lines between them, and then filling the shape when the user clicks on the first point a second time. This shape was tricky to implement because I needed to manage the growing list of x and y coordinates while the shape was being drawn, as well as draw new lines on each click, finally filling in the shape on the final click, by detecting proximity to a previous click.`,
    coverImage: draw_04,
    images: [draw_01, draw_02, draw_03, draw_04],
    repo: 'https://github.com/EmilyDeLisle/draw',
  },
  {
    name: 'Chess',
    description: `**Chess** is an Object-Oriented Programming project I did in term 2 of the Computer Systems Technology program at BCIT.
    
The goal was to utilize the OOP principles of inheritance, polymorphism, and abstraction to recreate Chess using Java. The secondary goal was to use serialization to enable saving and loading game data, restoring the game to a previously-saved state. The graphical user interface is made using the JavaFX library.

This was a challenging project because the logic of the game needed to be managed while correctly representing the state of the game on the GUI. The solution was to use the Game class as the single source of truth for the game itself (the arrays of pieces and their coordinates) as well as the JavaFX GUI (where to put all the rectangles and game piece icons). This also meant that saving and loading the state of the game only meant serializing the Game class, making the file input/output simple to implement.`,
    coverImage: chess_03,
    images: [chess_01, chess_02, chess_03, chess_04],
    repo: 'https://github.com/EmilyDeLisle/chess',
  },
  {
    name: 'Plant Pal 1',
    description: `After building **MedManager** with a team of students, I wanted to create another
    app on my own using what I'd learned in that first project. As a new plant parent, I wanted to build something that would help me to stop killing my plants.
    
I determined that I was probably overwatering my plants, and so was keeping a record of when I'd watered them last by writing it down on a calendar. This quickly became extremely tedious, so I thought, _"I can build an app for that!"_

Using **Plant Pal**, the user adds plants to their database which then keeps track of the last time the plant was watered as well as calculating the average time between waterings for each plant. The app also uses [Moment.js](https://momentjs.com/) and [FullCalendar](https://fullcalendar.io/) to display plant watering events in a calendar view (much easier than writing it by hand).
    
The data is stored in a [Firebase Realtime Database](https://firebase.google.com/products/realtime-database), and I built the frontend using [Bootstrap](https://getbootstrap.com/) with functions written with [jQuery](https://jquery.com/). The app also uses [Firebase Authentication](https://firebase.google.com/products/auth). I also wanted to go one step further, and wrote a [Node.js](https://nodejs.org/) service to communicate with the Firebase API and serve up the webpage with the data. The app is [hosted on Firebase](https://firebase.google.com/products/hosting) as well.`,
    coverImage: plantPal1_03,
    images: [plantPal1_01, plantPal1_02, plantPal1_03, plantPal1_04, plantPal1_05, plantPal1_06],
    repo: 'https://github.com/EmilyDeLisle/PlantPal_v1',
    url: 'https://plant-pal-ae41e.firebaseapp.com/',
  },
  {
    name: 'MedManager',
    description: `**MedManager** is an app used to manage daily medication dosing. It tracks dosing times for various medications entered by the user and reminds them when they are close to or past a dosing time. It also stores contact information for the user's pharmacy.

This was a collaborative student project worked on by myself and two other students in term 1 of the Computer Systems Technology program at BCIT over a period of about a month. It was our first major project using the Agile and scrum process and also our first taste of Git (and merge conflicts... so many merge conflicts).

This project had two objectives. The first was to create an interactive frontend web application using HTML, CSS, and JavaScript. The purpose, functionality, and design of the app was up to us, however, and we decided to build the frontend using [jQuery](https://jquery.com/) and [Bootstrap](https://getbootstrap.com/).

The second objective was to have the app store and fetch data from a database somewhere. For this, we used [Firebase Realtime Database](https://firebase.google.com/products/realtime-database), and thus began my love affair with [Firebase](https://firebase.google.com/). 

Since this application would, ostensibly, hold sensitive personal and medical information about its users, we also implemented Firebase's [drop-in Authentication solution](https://firebase.google.com/docs/auth/web/firebaseui) to quickly add more security and privacy to users' data.

**MedManager** was an especially fulfilling project for me because it meant I could combine my knowledge of pharmacy and my new skills as a budding software developer.`,
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
    description: `This little weather-telling app was one of the first things I built that makes use of external APIs, in this case [Google Geocoding](https://developers.google.com/maps/documentation/geocoding/overview) and [Dark Sky](https://darksky.net/dev) APIs. It was originally a static webpage, but I later went back and wrote a little [Node.js](https://nodejs.org/) service (using Express) and deployed it to [Heroku](https://www.heroku.com/).

The animated icons are [Skycons](https://darkskyapp.github.io/skycons/), also by Dark Sky.`,
    coverImage: weather_2,
    images: [weather_1, weather_2],
    repo: 'https://github.com/EmilyDeLisle/Weather',
    url: 'https://mle-weather.herokuapp.com/',
  },
]
