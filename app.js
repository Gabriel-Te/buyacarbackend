import express from 'express';

import { PORT, HOST } from './config.js';
import CarRouter from './routers/CarRouter.js'

import cors from 'cors'

var app = express();

app.use(cors({origin: process.env.CLIENT_ORIGINAL_URL}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/cars', CarRouter);

app.listen((PORT), () => {
  console.log(`servidor rodando na ${HOST}:${PORT}`)
})
