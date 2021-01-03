# Justification

I'm a firm believer that when learning a new technology that keeping things simple in the first instance is of paramount importance.  Frankly all the frilly bits can come later!

What I offer here is a simple implementation of a NodeJS RESTAPI built using the Express Library. I have chosen to [deploy this application with Docker](#Running-with-Docker) so providing you have this tool, there should be little issue with setting up your environment.

Do not expect this to be complete with all industry best practices, however if you are new to working with Node and Express then this could be a good sample project to start with! My hope is that you will find some use in 'poking' this implementation to see how it works and changing it to see how it breaks. Below I will explain what each file is doing so that you can start to build your own applications.

## What is going on?

### Node

Node is Server-Side JavaScript, bringing what was once a browser based language designed to do 'stuff' on a website, to a server to do different 'stuff'.  Node is popular because you can build you entire stack/system with JavaScript, that is, JavaScript on the front-end (Website), JavaScript on the Server (Node) and JavaScript for a Database (MongoDB).

### Express

Express is a library, its a collection of code that has been put together to provide us with functionality.  It abstracts away the awkardness of bulding solutions ourselves from scratch and allows us to quickly create a solution that meet our needs. both quickly and more efficeintly then we could likely manage independantly.

Express is a Library for creating a Web Server, it uses REST (Representational State Transfer) as a means of communicating over HTTP.  As I say, it takes away the awkwardness of us having to figure out what this would look like ourselves.

So if you are working with Node and what to create a means of serving webcontent, Express is a good library to be using.

## Structure of Project

This simple implementation describes a fundamental means of creating a web server with Express, there are only 3 files that are used to do this directly.

### server.js

The entrypoint to the application that hosts the boilerplate code required in order for the bits we write to work properly.

This is also where we define the routes that our application will communicate over, in my implementation we arent saying what these routes will do in this file though, that comes later.

Check the file itself and read the comments for what each line is doing!

### routes/route.js

This file describes what we want the route named 'route' to do.

In this iteration, the route will react to a GET request and will make a HTTP request of its own (GET again) to an API hosted over the internet.  It will then return the result of this GET Request to the user.

## Running-with-Docker

To build with Docker follow these steps:

```sh
docker build -t node_sample_image .
docker run -d -p 5000:5000 --name node_sample_container node_sample_image
```

Once the Container is in a running state you can hit the API with:
```sh
curl 127.0.0.1:5000/route/route
```
It should return:

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```
Once finished to clean up your environment use the following command.

```sh
docker rm -f node_sample_container
```
