# IT313 Course Catalog

## Laboratory 7 – Mobile Programming
Video Demonstration: Styling & Layout in React Native

## Project Description

The IT313 Course Catalog is a mobile application developed using React Native and Expo. It displays the available courses for the semester through organized and responsive course cards.

## Features

- Displays five IT courses.
- Reusable CourseCard component.
- Scrollable course list using ScrollView.
- Responsive card sizing using useWindowDimensions().
- Flexbox layout for arranging components.
- Flexible tag arrangement using flexWrap.
- Platform-specific shadows using Platform.select().

## Component Structure

### CourseCard.js
Displays the course code, course title, schedule, units, and lecture tag.

### CourseCatalog.js
Contains the course data using useState() and displays the courses using map() inside ScrollView.

### App.js
Serves as the main application entry point and renders CourseCatalog.

## Technologies Used

- React Native
- Expo
- JavaScript
- Visual Studio Code

## How to Run

1. Install Node.js.
2. Open the project folder in Visual Studio Code.
3. Open the terminal.
4. Install dependencies:

   npm install

5. Start Expo:

   npx expo start

6. Scan the QR code using Expo Go.