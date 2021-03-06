import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(logger('dev'));

export default app;
