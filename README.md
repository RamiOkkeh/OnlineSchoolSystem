# AlphaPlus

<div style="text-align:center">
    <a href="https://oss-0.herokuapp.com/">
        <img src="header.png" alt="AlphaPlus-perview"/>
    </a>
</div>

## Description

Full-Stack Application using Django and sqlite3 for backend, React typeScript with Redux for frontend, Firebase Cloud Firestore for live chat between users. Users have different roles and functionalities, some of those include the ability of a user with "principal" role to create school and classes, assign teachers and students to classes, teachers can set up exams which students can take and their grades will be saved in the DB for parents to review using a Mobile app created using React Native.

## Install

You need [Pyhton3](https://www.python.org/downloads/) and [Node](https://nodejs.org/en/download/) to run this project.

1. Clone this repo
2. Run `cd Frontend` to navigate to the _Frontend_ directory
3. Use `npm i` to install the required packages for react
4. Use `npm run build` to create a production build of the website
5. Copy the newly created folder _build_, and paste it into the _Backend_ directory
6. `cd ..` and then `cd Backend` to navigate to the _Backend_ directory
7. Run `pip install -r requirements.txt` to install the required packages for Django
8. Now we need to set up our django, so we use `python manage.py makemigrations` and then `python manage.py migrate`
9. Then we create an admin user by running `python manage.py createsuperuser` and filling in the needed info
10. Finally we run the django server using this command `python manage.py runserver`, note: this will run on port 3000 by default, to use another port add it's number after the command, for example: `python manage.py runserver 3001`
11. The server sould be running at this point, you just have to open "localhost:<3000 / the port you specified>"

## Technologies

- [Django](https://www.djangoproject.com/) as the main backend app with the default [Sqlite](https://www.sqlite.org/index.html) local database.
- [React](https://reactjs.org/) as the main Front-end for the project.
- [React Router](https://reactrouter.com/) for managing the website directories.
- [Redux](https://redux.js.org/) for managing global state.
- [Typescript](https://www.typescriptlang.org/) to provide static typing properties during development.
- [Firebase](https://firebase.google.com/) used to provide live chat functionality for classrooms.
- [Stripe](https://stripe.com/) used to provide schools with an online payment option.
- [ML5](https://ml5js.org/) machine learning to monitor student grades and notify staff.

## Key Files

1. [Backend/core/settings.py](https://github.com/RamiOkkeh/OnlineSchoolSystem/blob/master/Backend/core/settings.py)

   - Manages installed Django apps.
   - Connects to the Sqlite database.
   - Serves the React Front-end template.

2. [Backend/core/urls.py](https://github.com/RamiOkkeh/OnlineSchoolSystem/blob/master/Backend/core/urls.py)

   - Manages all paths for the backend api.

3. [Frontend/src/App.tsx](https://github.com/RamiOkkeh/OnlineSchoolSystem/blob/master/Frontend/src/App.tsx)

   - Main react Component.
   - Handles the Routing for the Front-end side.

4. [Frontend/src/reducers/rootReducer.ts](https://github.com/RamiOkkeh/OnlineSchoolSystem/blob/master/Frontend/src/reducers/rootReducer.ts)

   - Creates Redux state and manages it.

5. [Frontend/src/ml5Training.js](https://github.com/RamiOkkeh/OnlineSchoolSystem/blob/master/Frontend/src/ml5Training.js)

   - Was used to train a machine learning modle (development only)
   - Loads a pre-existing modle.

## Deployed Link: [AlphaPlus](https://oss-0.herokuapp.com/)
