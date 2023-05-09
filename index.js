//importing modules
const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const session = require("express-session");
const store = new session.MemoryStore();
const { getUserByEmail } = require('./model/ecommerce');

require('dotenv').config();

// importing routers
const plantsRouter = require('./routes/plants/plants.route');


//setting up the PORT
const PORT = process.env.PORT || 3000;

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

// Session
app.use(
  session({
    secret: "f4z4gs$Gcg",
    cookie: { maxAge: 300000000, secure: true, sameSite: "none" },
    saveUninitialized: false,
    resave: false,
    store,
  })
);


// Home
app.get('/', (req, res, next) => {
  res.json({ info: 'E-commerce App by L00vely' })
});


// Login
app.get("/login", (req, res, next) => {
  res.render("login");
});

// app.post("/login", (req, res, next) => {
//   const { email , password } = req.body;
//   getUserByEmail(email)
// } )


// Using routers
app.use('/api', plantsRouter);


app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}.`)
});

