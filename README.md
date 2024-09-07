# HRB Buena Tenant Form

This project is a Tenant Form Application built with React, TypeScript, and Redux. It allows users to input their information, review a summary, and submit their details. It includes features such as form validation, data submission, and a step-by-step form wizard.

## Features

Multi-step form wizard to collect user information
Form validation using react-hook-form
State management using Redux
UI components with Tailwind CSS
Toast notifications for form submission success using react-toastify
Unit tests using Jest and React Testing Library

## Tech Stack
* React (Frontend)
* TypeScript (Type-safe JavaScript)
* Redux toolkit (State Management)
* Tailwind CSS (Styling)
* Jest (Testing)
* React Testing Library (Testing)
* react-toastify (Notifications)

## Installation
To set up and run the project locally, follow these steps:

1. Clone the Repository
   
```bash
git clone https://github.com/imrafay/hrb-buena-tenant-form.git
cd hrb-buena-tenant-form
```

3. Install Dependencies
Before running the application, make sure to install all the required dependencies:
`npm install`

3. Environment Setup
Ensure you have a .env file if needed for the project configuration (such as API URLs or other environment variables).

4. Running the Application
To run the application in development mode, use:
`npm start`
Open http://localhost:3000 to view it in the browser.

## Usage
* Start the Application: Follow the instructions in the installation section to start the application.
* Fill Out the Form: Navigate through the form steps, enter the required information (Full Name, Email, Phone Number, Salary Range).
* Review Summary: After entering the details, you will see a summary page where all entered information is displayed.
* Submit: Click the "Submit" button to submit the form data and display a success message.

## Running Tests
The project uses Jest and React Testing Library for unit tests.
### Running All Tests
To run all tests:
`npm test`

## License
This project is licensed under the MIT License - see the LICENSE file for details.
