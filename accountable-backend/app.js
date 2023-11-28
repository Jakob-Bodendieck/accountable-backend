const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PORT = 5005;

const User = require('./models/User');
const Task = require ('./models/Tasks');

const {isAuthenticated} = require("../server/middleware/jwt.middleware");

const cors = require("cors");
const { get } = require("http");

// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded());
app.use(cookieParser());