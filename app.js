const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const rateLimiter = require('./middlewares/rateLimiter');
const { DB_URL } = require('./utils/serverConfigs');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const mainRouter = require('./routes/index');
const catchErrors = require('./middlewares/errors');

const { PORT = 3000 } = process.env;

const app = express();

app.use(helmet());
app.use(rateLimiter);
app.use(bodyParser.json());
app.use(requestLogger);
app.use(mainRouter);
app.use(errorLogger);
app.use(catchErrors);

mongoose.connect(DB_URL);

app.listen(PORT);
