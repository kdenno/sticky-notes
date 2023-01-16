# Getting Started with Sticky notes App

Git clone the project from https://github.com/kdenno/sticky-notes.git.

## Available Scripts

In the project directory, checkout the develop branch and then run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run test`

Launches the test runner in the interactive watch mode.\

### `A note about architecture`
The app follows the parent-child component relationship and state is passed down from the parent to the child component(StickyNote component) through props

#### `Folder structure`
The project follows the "group files by their types" folder structres whereby all components are hosted in the components folder and every feature there in is hosted in its own folder. The shared folder hosts functionality/features that are shared across different components
