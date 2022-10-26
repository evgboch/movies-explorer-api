const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mainRouter = require('./routes/index');
const { catchErrors } = require('./middlewares/errors');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(mainRouter);
app.use(catchErrors);

mongoose.connect('mongodb://localhost:27017/moviesdb');

app.listen(PORT);
