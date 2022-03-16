# Capstone Level 2 - Itunes API (fullstack)

## Overview

Fullstack application that uses React.js on the front-end and Express.js on the backend, to display
media from the itunes API.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Table of Contents

    1. Home page
    2. Catalogue page
    3. Cart page
    4. Contact page
    5. Login page

### Installation

1. Download and extract the zip files.
2. Run `npm install` from the root folder and inside the frontend folder.
3. First run the server by typing `npm start` from a terminal whilst inside root folder
   then navigate into the frontend folder and run the frontend by executing `npm start` .
4. View from localhost:3000 on your preferred browser.
5. Whilst inside the root folder type `npm test app.test.js` to run the backend test.
6. Go to frontend folder and type `npm test` to run the frontend tests.

### Usage

Choose what type of media to search for from the dropdown menu. ie (podcasts, music, TV shows, etc).
Then search for your favorite artist by name by inserting their name in the search bar.
Click the search button to query the itunes database.
Click on the heart on the top right corner of the media image to add it to your favorites.
On the favorites page click heart again to remove it from favorites.

### Security

Used Helmet and added it too express middleware to add a layer of security to the API.
No API keys were used. In the event that API keys are necessary they will be placed
in a .env file which would be added to .gitignore so that its not sent to GitHub.

### Link

https://github.com/gtchax/capstone2
