# Microservices - Blog App

Build, deploy, and scale an Blog app using Microservices built with Node, React, Docker and Kubernetes

## Microsevices

### NodeJS Microservices:

- Posts service
- Comments service

### NodeJS Microservices - PATH - METHOD - BODY - GOAL:

- Posts service:
  - /posts - POST - { title: string } - Create a new post
  - /posts - GET - - - Retrieve all posts
- Comments service:
  - /posts/:id/comments - POST - { content: string } - Create a comment associated with the given post ID
  - /posts/:id/comments - GET - - - Retrieve all comments associated with the given post ID

### NodeJS Microservices - Dependencies:

- express
- cors
- axios
- nodemon

### Client Side

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
