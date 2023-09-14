# Shiny Goggles

This is a full-stack practice app. The stack is as follows:

- Node/Express JSON api (back end)
- React (front end)
- Postgresql (db)

## Current status

API and React apps have been built and are in communication with each other. Docker is used to make set up easy.

# Steps for running the app

- After cloning the app, you need to:

1. set up the environment variables
2. execute the docker command to run the app

## Set up environment variables

Create a file called .env in the root directory (the same directory as the docker-compose.yml file) with the keys as they appear in the sample.env file and replace the values with your own

## Execute the docker command to run the app

Inside the root directory (the one with the docker-compose.yml file in it), run the following:

```base
docker volume create Shiny-goggles-data
docker-compose up --build
```
