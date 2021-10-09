const cors = require("cors")
//import express, { Express, Request, Response } from "express";
//import { oktaAuthRequired } from "./lib/oktaAuthRequired";

const express = require("express")
const {oktaAuthRequired}= require("./lib/oktaAuthRequired");

//const app: Express = express();

app.use(cors());

app.get("/api/locked", oktaAuthRequired, (req: Request, res: Response) => {
  res.json({
    messages: [
      {
        date: new Date(),
        text: "Token Verified",
      },
      {
        date: new Date(new Date().getTime() - 1000 * 60 * 60),
        text: "This is api response!",
      },
    ],
  });
});

app.get("/api/free", (req: Request, res: Response) => {
  res.json({
    messages: [
      {
        date: new Date(),
        text: "HAHAHAHAHA YOU THOT YOU COULD LOCK ME UP",
      },
    ],
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    process.env.PORT,
    app.settings.env
  );
});
