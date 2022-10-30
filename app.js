require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const rateLimiter = require('./middlewares/rateLimiter');
const { DB_URL_DEV } = require('./utils/serverConfigs');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const mainRouter = require('./routes');
const catchErrors = require('./middlewares/errors');

const { NODE_ENV, DB_URL, PORT = 3000 } = process.env;

const app = express();

app.use(helmet());
app.use(requestLogger);
app.use(rateLimiter);
app.use(bodyParser.json());
app.use(mainRouter);
app.use(errorLogger);
app.use(errors());
app.use(catchErrors);

mongoose.connect(NODE_ENV === 'production' ? DB_URL : DB_URL_DEV);

app.listen(PORT);
