# MERN-stack-exercise-tracker
Learn the MERN(MongoDB, Express, React, Node.js) stack by building an exercise tracker app

# Set up MongoDB Altas
Ref.
https://www.slideshare.net/mongodb/part-one-building-web-apps-with-the-mern-stack

# Set up the project
```bash
# Check the version of Node.js
node -v

# Build the react app directly in the current folder created before
npx create-react-app .

# Create a folder called backend
mkdir backend
cd backend
npm init -y
npm install express cors mongoose dotenv
# express: a lightweight and fast web application framework for Node.js
# cors: stands for cross origin resouse sharing, providing a Connect/Express middleware that can be used to enable CORS with various options
# mongoose: a MongoDB object modeling tool designed to work in an asynchronous environment
# dotenv: loads environment variables from a .env file into process.env

# nodemon: a tool that helps develop nodejs based applications by automatically restarting the node application when files changes are detective
sudo install -g nodemon

(working on server.js...)

# Start the server
nodemon server

```
