import express from 'express';
import { createConnection } from 'typeorm';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import adminRouter from './route/admin';

/* model */
import { BlogModel } from './model/BlogModel';

const blogModel = new BlogModel();


const PORT = 3001;
const app = express();

createConnection()
  .then(async () => {
    app.use(bodyParser.json());
    app.use(logger('dev'));
    app.use(
      cors({
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
      }),
    );

    app.get('/', (req, res) => {
      res.send('hello');
    });

    app.get('/info', async (req, res) => {
      try {
        const info = await blogModel.findWithId(1);
        res.status(200).send(info);
      } catch (err) {
        res.status(409).send(err.message);
      }
    });

    app.use('/admin', adminRouter);

    app.listen(PORT, () => {
      // console.log(`Server listening on port ${PORT}`)
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
