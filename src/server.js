import express from 'express';
import cors from 'cors';
import http from 'http';
import shortid from 'shortid';
import mongoose from './util/dbconnect.js';
import dotenv from 'dotenv';

import Url from './model/url.js';
import validateUrl from './util/validateUrl.js';

console.clear();
dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

http.createServer(app).listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

import short from './routes/short.js';
import resolver from './routes/resolver.js';

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/short', short);
app.get('/:linkid', resolver);