import express from 'express';

import { PORT, HOST } from './config.js';
import CarRouter from './routers/CarRouter.js'

import cors from 'cors'

var app = express();

app.use(cors({origin: '*'}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/car', CarRouter);

app.listen((PORT), () => {
  console.log(`servidor rodando na ${HOST}:${PORT}`)
})
