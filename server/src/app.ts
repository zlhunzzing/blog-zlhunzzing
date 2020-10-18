import express from "express";
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import cors from 'cors';
import logger from 'morgan';

import { Request, Response } from "express";

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

    app.get("/", (req, res) => {
      res.send("hello");
    });

    app.post("/admin/signup", async (req: Request, res: Response) => {
      if(req.body.password === process.env.ADMIN_PASSWORD) {
        res.json(true);
      } else {
        res.json(false)
      }
    });

    app.listen(PORT, () => {
      // console.log(`Server listening on port ${PORT}`)
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
