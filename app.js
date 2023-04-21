//importing modules
const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// importing routers
const plantsRouter = require('./app/plants/plants.route');
const usersRouter = require('./app/users/users.route');

//setting up the PORT
const PORT = process.env.PORT || 8080;

//assigning the variable app to express
const app = express();

// Logging
app.use(morgan('short'));

// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());

// Transforms raw string of req.body into JSON
app.use(bodyParser.json());

// Parses urlencoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.set('trust proxy', 1);

// Home
app.get('/', (req, res, next) => {
  res.json({ info: 'E-commerce App by L00vely' })
});

// Using routers
app.use('/plants', plantsRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}.`)
});

