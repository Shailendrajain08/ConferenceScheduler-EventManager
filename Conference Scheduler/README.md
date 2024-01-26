# React + Vite Project with JSON Server

## Overview

This project is a React application that utilizes JSON Server as a mock backend for development purposes. The application starts with the `npm run dev` command. 

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine with that make sure you have [json-server(https://github.com/shahedbd/jsonServer)] installed on your machine.

### Installation

`npm install -g json-server` This command will install json server in your system.
`npm install` This command will help you to install dependencies. 

### Usage

To start the development server along with the JSON Server, use the following command:
`json-server --watch db.json`
Visit http://localhost:3000 in your browser to access the json data.

To start the React application, use the following command:
`npm run dev`
Visit http://localhost:5173/ in your browser to access the React application.

### Pages
Login Page: The application starts on the login page. Users can enter their credentials to log in.

Signup Page: From the login page, users can navigate to the signup page to create a new account.

These Two pages are unprotected so any user can create account and logged in.

Events: this page have all the events list here so any user can buy desired event ticket. 

Your Events: this page have all the events list which is created by current user(you).

Create Events: Every your can create there own event from this page.

These Three pages are protected so any unauthorised user can not use the application.

### User Authentication
Once a user is logged in, they can fully utilize the features of the application.

### JSON Server
The project uses JSON Server to simulate a backend environment. The mock API is available at http://localhost:3000.


