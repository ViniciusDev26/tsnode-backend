import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(port);
