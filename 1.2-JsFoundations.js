let name = "Abhishek";
let age = 22;
let isMarried = true;

console.log("Hello my name is " + name + " My age is " + age);

IF - ELSE;
if ((isMarried = false)) {
  console.log(name + " is married");
} else {
  console.log(name + " is not married");
}

// LOOPS

answer = 0;

for (i = 0; i < 10; i++) {
  answer = answer + 3;
}
console.log(answer);

ARRAY;

const agesOf = [23, 24, 33, 64, 20, 18, 19];

for (i = 0; i < agesOf.length; i++) {
  if (agesOf[i] % 2 == 0) {
    console.log(agesOf[i]);
  }
}

// WRITE A PROGRAM TO PRINT THE BIGGEST NUMBER OF AN ARRAY

const numbers = [22, 24, 76, 45, 73, 98, 66, 34, 95, 22];

let biggestnumber = 0;

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > biggestnumber) {
    biggestnumber = numbers[i];
  }
}

console.log("The biggest number of the array is " + biggestnumber);

// OBJECTS

// PRINT OUT ALL PLAYERS WHOSE ROLE IS BATSMAN

const players = [
  {
    firstName: "Virat",
    lastName: "Kohli",
    role: "Batsman",
  },
  {
    firstName: "Jasprit",
    lastName: "Bumrah",
    role: "Bowler",
  },
  {
    firstName: "Rohit",
    lastName: "Sharma",
    role: "Batsman",
  },
];

for (i = 0; i < players.length; i++) {
  if (players[i]["role"] == "Batsman") {
    console.log(players[i]["firstName"] + " " + players[i]["lastName"]);
  }
}

//function

function sum(a, b) {
  let sumVal = a + b;
  return sumVal;
}

const randomSum = sum(4, 9);
console.log(randomSum);

const randomSum2 = sum(4, 18);
console.log(randomSum2);

//CALLBACKS

function sum(a, b, functocall) {
  let totalSum = a + b;
  functocall(totalSum);
}

function displayActive(result) {
  console.log("The result is " + result);
}

function displayPassive(result) {
  console.log("The result obtained by you is  " + result);
}

let findSum = sum(7, 9, displayPassive);

function greet() {
  console.log("hello world");
}

setTimeout(greet, 3 * 1000);
