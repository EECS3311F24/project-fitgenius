# Motivation

FitGenius is an application meant to ease users into their fitness journey conveniently.
We all know starting to work out can be very daunting and difficult especially to those with no guidance.
Health is an essential part of everyone's life and should not be neglected.
The aim with FitGenius is to get everyone working out through the use of our app.

# Installation

This is an MVC `MERN` stack project. The inital setup was done in accordance to an official guide from MongoDB (https://www.mongodb.com/resources/languages/mern-stack-tutorial)

Technologies:
- `MongoDB` for the database
- `Express.js` for the backend
- `React` for the frontend
- `Node.js` for the backend

Running the project requires node `v20.11.0`

Check your node version by running
`node --version`

If the version is not 20.11.0 do
`nvm install 20.11.0`
then
`nvm use 20.11.0`
then
`nvm alias default 20.11.0`

To build and run the project:
1. First, clone the repository on your end
2. Then open two terminals
3. With one terminal `cd` into the `/client` directory and run the command `npm run dev`
4. With the other terminal `cd` into the `/server` directory and run the command `node --env-file=config.env server`

# Contribution

In order for multiple group members to develop the application effectively, we work according to tickets created on Trello.
After a member picks up a ticket, they will create a new branch. The naming convention is just descriptive, concise, and using kebab case.
The member will also make a pull request for other members to view, requiring one approval for the PR to be merged.
