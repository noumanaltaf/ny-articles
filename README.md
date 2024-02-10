# New York Times Articles

This React application displays a grid of articles and allows users to view detailed article pages. Articles data is fetched from below mentioned api. It leverages React Query for efficient data fetching and management.

### https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=sample-key

## Features

-  **Articles Grid:** Presents a visual grid of articles with key information. 
-  **Detailed Article Views:** Provides in-depth article content on separate pages. 
-  **Asynchronous Data Fetching:** Uses React Query for optimized data fetching and caching.

## Technologies Used

-  **React:** Front-end JavaScript library for building user interfaces. 
-   **TypeScript:** Superset of JavaScript with optional static typing for enhanced code reliability.
- **Styled Components:** CSS-in-JS library for styling components with a focus on maintainability.
- **React Query:** Powerful library for fetching, caching, and managing asynchronous data in React applications.

## Setup

### `git clone clone-url`
clone application

### `cd project dir`
Move to project directory

### `npm install`
Install ALl dependencies

### `API_KEY`
Replace the value of API_KEY constant variable to your API secrete key. src/api/constants 

### `npm run start`
Runs the development server.

## Other commands

### `npm run build`
Builds the app for production to the `build` folder.\

### `npm run test`
Run all unit tests

### `npm run coverage`
Gives you coverage report

### `npm run cypress:open`
open cypress tool for you for testing

### `npm run cypress:run`
Run and ensure all tests.

### `npm run lint`
Run eslint and check for possible errors

### `npm run lint:fix`
fix linting errors automatically
	