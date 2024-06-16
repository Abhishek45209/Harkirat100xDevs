const express = require("express");
const app = express();

function middlewareAuthentication(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "Abhishek" || password != "Ab3384") {
    res.status(400).json({
      msg: "You are not a authorized user ",
    });
  } else {
    next();
  }
}

function middlewareInput(req, res, next) {
  const birthYear = req.query.birthYear;
  if (birthYear != 2001 && birthYear != 2000) {
    res.status(400).json({
      msg: " Naah ni you are not 90s kid ",
    });
  } else {
    next();
  }
}

app.use(middlewareAuthentication);
app.use(middlewareInput);

app.get("/mid", (req, res) => {
  res.send("Hii You are here");
});

app.listen(3001);
