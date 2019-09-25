// Global Variables
var crystal = {
  blue: {
    name: "Blue",
    value: 0
  },
  silver: {
    name: "Silver",
    value: 0
  },
  topaz: {
    name: "Topaz",
    value: 0
  },
  white: {
    name: "White",
    value: 0
  }
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

// Functions
var startGame = function() {
  currentScore = 0;
  targetScore = getRandom(19, 120);
  crystal.blue.value = getRandom(1, 12);
  crystal.silver.value = getRandom(1, 12);
  crystal.topaz.value = getRandom(1, 12);
  crystal.white.value = getRandom(1, 12);
  $("#playerScore").html(currentScore);
  $("#targetScore").html(targetScore);
};

var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var addValues = function(crystal) {
  currentScore = currentScore + crystal.value;
  $("#playerScore").html(currentScore);
  console.log("Your Score: " + currentScore);
  win();
};

var win = function() {
  if (currentScore > targetScore) {
    alert("You Lose!");
    console.log("You Lose!");
    lossCount++;
    $("#lossCount").html(lossCount);
    startGame();
  } else if (currentScore === targetScore) {
    alert("You Won!");
    console.log("You Won!");
    winCount++;
    $("#winCount").html(winCount);
    startGame();
  }
};

// Main Process
startGame();

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#silver").click(function() {
  addValues(crystal.silver);
});

$("#topaz").click(function() {
  addValues(crystal.topaz);
});

$("#white").click(function() {
  addValues(crystal.white);
});
