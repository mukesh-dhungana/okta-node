const express = require("express");
const cors = require("cors");

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

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    process.env.PORT,
    app.settings.env
  );
});
