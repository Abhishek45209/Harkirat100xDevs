const express = require("express");

const app = express();

app.get("/ninety", (req, res) => {
  const birthYear = req.query.birthYear;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "Abhishek" || password != "Ab3384") {
    res.status(400).json({
      msg: "You are not a authorized user ",
    });
    return;
  }
  if (birthYear != 2001 && birthYear != 2000) {
    res.status(400).json({
      msg: " Naah nigga you are not 90s kid ",
    });
    return;
  }
  res.send("Hii You are here");
});

app.listen(3001);
