# Justification

I'm a firm believer that when learning a new technology that keeping things simple in the first instance is of paramount importance.  Frankly all the frilly bits can come later!

What I offer here is a simple implementation of a NodeJS RESTAPI built using the Express Library. I have chosen to [deploy this application with Docker](#Running-with-Docker) so providing you have this tool, there should be little issue with setting up your environment.

The justification for this project is to showcase the functionality of Gitlab CI alongside a simple project, if you are after an explanation of the Node.js, please take a look [here](https://github.com/matt-joe-hunt/sample-nodejs-api).

## What is going on?

Github allows us to create a CI Pipeline for our applications using compute resources that we access via the Github platform. This allows us to quickly and easily setup a CI Pipeline 

## Structure of Project

Inside of the hidden directoy, (it starts with a .) .github, and then inside of the workflows directory is a file called docker-image.yml.