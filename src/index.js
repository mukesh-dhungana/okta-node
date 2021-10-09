const express = require("express");
const cors = require("cors");

const { oktaAuthRequired } = require("./lib/oktaAuthRequired.js");

const app = express();

app.use(cors());
app.get("/api/free", (req, res) => {
  res.json({
    messages: [
      {
        date: new Date(),
        text: "HAHAHAHAHA YOU THOT YOU COULD LOCK ME UP",
      },
    ],
  });
});

app.get("/api/locked", oktaAuthRequired, (req, res) => {
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
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    process.env.PORT,
    app.settings.env
  );
});
