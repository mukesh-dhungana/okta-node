/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { oktaAuthRequired } from './lib/oktaAuthRequired';

dotenv.config({
  path: '.env',
});

const app: Express = express();
const PORT = process.env.APP_PORT as string || 443;

app.use(cors());

app.get('/api/locked', oktaAuthRequired, (req: Request, res: Response) => {
  res.json({
    messages: [
      {
        date: new Date(),
        text: 'Token Verified',
      },
      {
        date: new Date(new Date().getTime() - 1000 * 60 * 60),
        text: 'This is api response!',
      },
    ],
  });
});

app.get('/api/free', (req: Request, res: Response) => {
  res.json({
    messages: [
      {
        date: new Date(),
        text: 'HAHAHAHAHA YOU THOT YOU COULD LOCK ME UP',
      },
    ],
  });
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});