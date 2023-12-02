# Developer Guide

This guide provides an overview of the MERN Blog with Admin Panel application and instructions on how to set up, configure, and extend the application.

## Table of Contents

1. [Setting Up](#setting-up)
2. [Configuring the Application](#configuring-the-application)
3. [Extending the Application](#extending-the-application)
4. [API Documentation](#api-documentation)

## Setting Up

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install` in the root directory of the project.
3. Start the MongoDB server.
4. Start the Express.js server by running `npm start` in the `server` directory.
5. Start the React.js application by running `npm start` in the `client` directory.

## Configuring the Application

1. Configure the MongoDB connection in `server/utils/db.js`.
2. Configure the JWT secret key in `server/utils/jwt.js`.
3. Configure the Express.js server in `server/index.js`.
4. Configure the React.js application in `client/src/App.js`.

## Extending the Application

1. To add a new component, create a new file in the `client/src/components` directory and export the component from this file.
2. To add a new model, create a new file in the `server/models` directory and define the data schema in this file.
3. To add a new route, create a new file in the `server/routes` directory and define the API route in this file.
4. To add a new controller, create a new file in the `server/controllers` directory and define the controller functions in this file.

## API Documentation

The API documentation provides detailed information about the API routes, request parameters, and response formats. Please refer to the API documentation for more information.