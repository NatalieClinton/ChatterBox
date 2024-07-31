# ChatterBox API

**A social network API built with Express.js, Mongoose, and MongoDB.**

## Description
ChatterBox API is a backend application that provides endpoints for creating, reading, updating, and deleting users, thoughts, and reactions. It utilizes MongoDB for data storage and Express.js for routing.

## Table of Contents
* [Installation](#installation)
* [Environment Variables](#environment-variables)
* [Running the Application](#running-the-application)
* [API Endpoints](#contributing)
* [Technology Used](#technologies-used)
* [License](#license)
* [Walkthrough Video](#questions)
* [Contact](#contact)


## Installation
1. Clone this repository
2. Naviagate to project directory.
3. Run `npm install` to install dependencies.

## Environment Variables
Create a .env file at the root of the project and add the following environment variable:

## Running the Application
1. Run `npm start` to start the server.
2. Run `npm run seed` to seed the database with test data.

## API Endpoints
### Users
| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /api/users | Returns all users in the database. |
| GET | /api/users/:userId | Returns a single user by userId. |
| POST | /api/users | Creates a new user. |
| PUT | /api/users/:userId | Updates a user by userId. |
| DELETE | /api/users/:userId | Deletes a user by userId. |
### Thoughts
| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /api/thoughts | Returns all thoughts in the database. |
| GET | /api/thoughts/:thoughtId | Returns a single thought by thoughtId.
| POST | /api/thoughts | Creates a new thought. |
| PUT | /api/thoughts/:thoughtId | Updates a thought by thoughtId. |
| DELETE | /api/thoughts/:thoughtId | Deletes a thought by thoughtId. |
### Reactions
| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /api/thoughts/:thoughtId/reactions | Creates a new reaction. |
| DELETE | /api/thoughts/:thoughtId/reactions/:reactionId | Deletes a reaction

## Technologies Used
Node.js
Express.js
Mongoose
MongoDB

## License
This project is licensed under the MIT License.

## Walkthrough Video
Watch the Walkthrough Video(https://drive.google.com/)    

## Contact
For any questions or feedback regarding this project, feel free to reach out to me using the following links:

- [Email](mailto:natalie.clinton@hotmail.com)
- [GitHub](https://github.com/NatalieClinton)