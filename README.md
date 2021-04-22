
# city-explorer-api

# Project Name: City Explorer Lab-07

**Author**: Louis Lassegue
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## The Request/Response Cycle of the Web

![Web Request/Response Cycle Diagram](/img/wrrc.png)

## Overview
Building a server to listen for request from frontend app.

## Getting Started
To get started you will need to npm install express, dotenv, and cors to app folder. Add .gitignore and .eslintrc.json file.
Add .env file and put .env in .gitignore content space.

## Architecture

[Node JS](https://nodejs.org/en/):As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

[NPM JS](https://docs.npmjs.com/):Use to help share and borrow packages.

[Express JS](http://expressjs.com/en/4x/api.html): A web frameork for Node.js

[NPM JS package:dotenv](https://www.npmjs.com/package/dotenv): Storing configuration in the environment separate from the code base.

[NPM JS package:cors](https://expressjs.com/en/resources/middleware/cors.html):Allow REACT app forntend to access data form server

[NPM JS package:axios](https://www.npmjs.com/package/react-axios):This is intended to allow in render async requests.

[Heroku](https://www.heroku.com/home): Used to up load server app.

[Trello:project board](https://trello.com/en-US):Help manage projects.

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example: -->

04-10-2021 3:30pm - express server setup done

## Credit and Collaborations
worked with Garfield Grant with setup and server build.

# Time Estimates

Name of feature 1: build a basic Express server

Estimate of time needed to complete: 2 hrs

Start time: 4:00

Finish time: 6:00

Actual time needed to complete: 2hrs

# city-explorer-api

# Project Name: City Explorer Lab-08

**Author**: Louis Lassegue

**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## The Request/Response Cycle of the Web

![Request/Response Cycle of the Web Diagram](/img/wrrc2.png)

## Overview
Requesting data from my server to get data from third API Weatherbit and Themoviedb. Then render data to frontend.

## Getting Started
1. You will need to to get your own API key from [Weatherbit](https://www.weatherbit.io/) and [Themoviedb](https://www.themoviedb.org/)

2. Add an .env file. Next add (.env) to your .gitignore file to hide API keys

3. On your terminal you need to install dependencies: axios, cors, dotenv, express and superagent.

## Architecture
[Node JS](https://nodejs.org/en/):As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

[NPM JS](https://docs.npmjs.com/):Use to help share and borrow packages.

[Express JS](http://expressjs.com/en/4x/api.html): A web frameork for Node.js

[NPM JS package:dotenv](https://www.npmjs.com/package/dotenv): Storing configuration in the environment separate from the code base.

[NPM JS package:cors](https://expressjs.com/en/resources/middleware/cors.html):Allow REACT app forntend to access data form server

[NPM JS package:axios](https://www.npmjs.com/package/react-axios):This is intended to allow in render async requests.

[Heroku](https://www.heroku.com/home): Used to up load server app.

[Trello:project board](https://trello.com/en-US):Help manage projects.

[SuperAgent](https://visionmedia.github.io/superagent/#test-documentation): to help request data from third party APIs and resposne back to frontend client

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations
- Work with Michael Hendricks, Prabin Singh and Tom McGuire to figure about how to  request and response data from api.

- Lecture and Instruction with Michelle Ferreirae and Ryan Gallaway

- Assists from Joe Pennock 
# Time Estimates

Name of feature: Adding data from third party

Estimate of time needed to complete: 2 days

Start time: 6:00

Finish time: 7:00

Actual time needed to complete: 4 days

# city-explorer-api

# Project Name: City Explorer Lab-09

**Author**: Louis Lassegue

**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## The Request/Response Cycle of the Web

![Request/Response Cycle of the Web Diagram](/img/WRRC3.png)

## Overview

Refactor code: Modularize the back-end codebase

## Getting Started

1. Remove the weather functionality from the `server.js` and place it in its own `weather.js` file. Bring that component into your `server.js` file and ensure that your server is functioning as expected before moving on.

2. Remove the movie functionality from the `server.js` and place it in its own `movies.js` file. Bring that component into your `server.js` file and ensure that your server is functioning as expected before moving on.

3. Deploy your changes to website.

## Architecture

[React](https://reactjs.org/)

[React-Bootstrap](https://react-bootstrap.github.io/)

[Axios](https://www.npmjs.com/package/axios)

[LocationIQ](https://locationiq.com/)

We are using React language to build the app. React-bootstrap for styling, Axios for requesting from the API LocationIQ.

[Node JS](https://nodejs.org/en/):As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

[NPM JS](https://docs.npmjs.com/):Use to help share and borrow packages.

[Express JS](http://expressjs.com/en/4x/api.html): A web frameork for Node.js

[NPM JS package:dotenv](https://www.npmjs.com/package/dotenv): Storing configuration in the environment separate from the code base.

[NPM JS package:cors](https://expressjs.com/en/resources/middleware/cors.html):Allow REACT app forntend to access data form server

[NPM JS package:axios](https://www.npmjs.com/package/react-axios):This is intended to allow in render async requests.

[Heroku](https://www.heroku.com/home): Used to up load server app.

[Trello:project board](https://trello.com/en-US):Help manage projects.

[SuperAgent](https://visionmedia.github.io/superagent/#test-documentation): to help request data from third party APIs and resposne back to frontend client

## Change Log

04-21-2001 7:00pm - Refactor: code

## Credit and Collaborations

- Lecture and Instruction with Michelle Ferreirae and Ryan Gallaway

- Worked with Qadree Trimble to draw out WRRC image.

- Tom McGuire help with image_path to add images to websites

# Time Estimates

Name of feature: Refactor: Modularize the back-end codebase

Estimate of time needed to complete: 2 hrs

Start time: 7:00

Finish time: 10:00

Actual time needed to complete: 3 hrs
