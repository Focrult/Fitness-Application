# Title: Fitness Tracker Application

## Description

The fitness tracker application is an easy-to-use for the user's fitness journey.
It's secure and compatible with various mobile devices.

## Acceptance Creteria

Given a fitness tracker application,
When I visit the site
Then I am prompted for either login or signup,
When I click on the sign-up,
Then I am prompted to enter my email, name and phone number
When I click signup
Then I am taken to the Dashboard where I must enter specific details + preferences - beginner, intermediate, advanced.
When I finish entering the details
Then I am given a customized 4 week and 12-week workout plan, graph showing my progress, recommended foods blog, workout trends, etc
When I select navigation for workout plan,
Then I am given a customized workout plan, with checkboxes for progress
When I select navigation for the graph
Then I shown a visual representation of my progress
When I select navigation for foods,
Then I shown a blog of recommended foods
When I select the navigation for workout trends,
Then I am prompted for the top ten workout trends.

## User Story

As a fitness newbie, I want to use a fitness tracker app to help me get started with my fitness journey.
The app creates a personalized fitness plan and guides me through beginner-friendly workouts like yoga and cardio.
I can track my progress and set reminders. The app provides feedback on my workouts, including the number of workouts, time spent exercising, and calories burned.
The fitness tracker app is an easy-to-use tool for my fitness journey. It's secure and compatible with various mobile devices.

## Installation

- In your command line interface (Git Bash), navigate to the application directory and run the following commands:

  ```md
  > npm install
  > mysql -u root
  > SOURCE db/db.sql;
  > EXIT
  > npm start OR node.js
  ```

## Usage

- Upon complete of installation, you could use this application with node.js on your local server.

## Contribution

- This application could contribute (provide) all fitness & health service for anybody on that journey.

## Links

- [The URL of the functional deployed application]()

- [The URL of GitHub Repository](https://github.com/Focrult/Fitness-Application)

- [Webe page appearance](./Assets/Front%20Page.png)
- [Background](./Assets/background.jpg)

## License

- Covered by Mozilla [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
