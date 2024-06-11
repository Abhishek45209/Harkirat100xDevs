const express = require("express");

const cricketers = [
  {
    fullname: "Rohit Sharma",
    role: "Opener",
    trophies: [
      {
        individual: false,
      },
    ],
  },
];

const app = express();

app.get("/", function (req, res) {
  const rohitTrophies = cricketers[0].trophies;
  const numberOfTrophy = rohitTrophies.length;
  let nonindividual = 0;
  for (i = 0; i < numberOfTrophy; i++) {
    if (rohitTrophies[i].individual) {
      nonindividual = nonindividual + 1;
    }
  }
  let individual = numberOfTrophy - nonindividual;

  res.json({ numberOfTrophy, nonindividual, individual });
});

app.get

app.listen(3001);
