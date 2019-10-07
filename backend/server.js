const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.ATLAS_URI;
// Connect to MongoDB
/**
 * useNewUrlParser
 * The underlying MongoDB driver has deprecated their current connection string parser. 
 * Because this is a major change, they added the useNewUrlParser flag 
 * to allow users to fall back to the old parser if they find a bug in the new parser
 */
/**
 * useCreateIndex
 * False by default. 
 * Set to true to make Mongoose's default index build use createIndex() 
 * instead of ensureIndex() to avoid deprecation warnings from the MongoDB driver
 */
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection.once('open', () => {
  console.log('MongoDB connection established!');
});


const app = express();
// whatever is in the environment variable PORT, or 5000 if there's nothing there
const port = process.env.PORT || 5000;

// Use third-party middleware to add functionality to Express apps
app.use(cors());
// Use Built-in middleware
// Parse incoming requests with JSON payloads
app.use(express.json());

// Binds and listens for connections on the specified host and port
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
