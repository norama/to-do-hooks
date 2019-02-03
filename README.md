# ToDo List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Description](#description)
- [Configuration](#configuration)
- [Demo](#demo)
- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn run build](#yarn-run-build)
- [Learn More](#learn-more)
  
## Description

This is a simple todo list application with reminders.
You can add a ToDo item by typing its text and pressing the **ADD** button.
Todo items in the list can be edited and marked/unmarked as done,
in which case their completion time is added/cleared automatically.

You can set reminder time for a ToDo item in which case a notification for this item
will be shown just before this time. Then the reminder is cleared automatially.

## Configuration

The [.env](https://github.com/norama/to-do-hooks/blob/master/.env) configuration file
contains two parameters for reminder processing:

- `REACT_APP_REMINDER_LOOKUP`: time period for checking reminders to be processed (minutes, default: 2)
- `REACT_APP_REMINDER_LOOKAHEAD`: reminders are taken for processing within this time interval (minutes, default: 5)

The default settings are set for testing purposes so that we should not wait for ages while trying out.
It means that reminders will be checked in every 2 minutes and those due within at most 5 minutes
will be processed. Processing a reminder means that a notification is shown and the corresponding item
is highlighted for about half a minute or as long as the notification is not closed manually.
Reminders are cleared after processing.

## Demo

Click [here](https://norama.github.io/to-do-hooks) to see it running.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
