# Would You Rather Project

This project was built for the Udacity React Nanodegree's Redux section of the course.  The main goal of this project is to make use of Redux in state management.

In this web app, the user plays the “Would You Rather?” game, where he is asked a question in the form: “Would you rather [option A] or [option B] ?”.

In the current implementation, the User logs in by impersonating one of 4 characters, (i.e. they are actual people and are all personal friends of mine):

1. San San - *student majoring in early childhood development and lover of the outdoors*
2. Scarlett Lash - *fashion and tattoo model*
3. Missy M - *collectible toys artist and mural painter/artist*
4. Charleston Pierce - *actor, model, coach, book author, and fashion show producer*

Once the user logs in, he may select a poll to view.  If the user has not answered the question yet, he is prompted for his answer.  Once the question has been answered, he is shown the results of the poll.

The user can also add new questions as the logged in character.

A leaderboard list the characters with highest to lowest scores (i.e. scores are calculated by adding the number of "Answered questions" to the number of "Created questions")

Future versions of the app may allow users to create their own profile and add user authentication and use a database for storage, but this wasn't a requirement for this project and hasn't been implemented yet.

## Instructions to run:

You can try out this app at [https://udacity-would-you-rather-stevehan.netlify.app/](https://udacity-would-you-rather-stevehan.netlify.app/)

If you like to run the app locally on your machine, first install [Node.js](https://nodejs.org/en/) if you don't already have it installed.  Once Node is installed you can install the app by running:

```
git clone https://github.com/stevehanphoto/udacity-reactnd-project-would-you-rather.git
```
cd in to the *udacity-reactnd-project-would-you-rather* project folder and run the commands:
```
npm install

npm start
```
Go to http://localhost:3000 on your browser

## Project Folder Structure
```
├── CONTRIBUTING.md # Not modified.
├── README.md # This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── manifest.json # Not modified.
│   └── index.html # Not modified.
└── src
    ├── components
    │   ├── App.js # This is the root of the app.
    │   ├── Nav.js # Navigation menu bar
    │   ├── LogIn.js # Login page. The only page accessible to the user prior to logging in.
    │   ├── LogInDropDown.js # custom dropdown menu to select the user to log in as
    │   ├── ListQuestion.js # User can select a question from a list of unanswered questions to take a poll or view the result from a list answered questions.
    │   ├── NewQuestion.js # Input form to create a new question
    │   ├── PollQuestion.js # Polls the user to select their answer to the question
    │   ├── ViewPollResults.js - # View of results of the question
    │   ├── LeaderBoard.js # List the total score, based on total questions answered & number of questions created, of users.
    │   ├── Page404.js # Shows 404 page not found message
    ├── actions
    │   ├── authedUser.js
    │   ├── questions.js
    │   ├── users.js
    │   └── shared.js # 
    ├── reducers
    │   ├── index.js
    │   ├── authedUser.js
    │   ├── questions.js
    │   └── users.js #     
    ├── middleware
    │   ├── index.js
    │   └── logger.js #     
    ├── utils
    │   ├── _DATA.js # A JavaScript API to communicate with Udacity backend.
    │   ├── api.js        
    ├── img # Images for the app.
    │   ├── SanSan.jpg # Image of San San
    │   ├── ScarlettLash.jpg # Image of Scarlett Lash
    │   ├── MissyM.jpg # Image of Missy M
    │   └── CharlestonPierce.jpg # Image of Charleston Pierce 
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only.
```

## Resources
- [Project Starter Template](https://github.com/udacity/reactnd-project-would-you-rather-starter)
- [Project Rubric](https://review.udacity.com/#!/rubrics/1567/view)
