function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  if (playerPressed === "Escape") {
    gameOver();
  }

  const displayesAlphabetElement = document.getElementById("current-alphabet");
  const displayedAlphabet = displayesAlphabetElement.innerText;
  const expectedAlphabet = displayedAlphabet.toLocaleLowerCase();
  console.log(expectedAlphabet, playerPressed);

  //   check wrong or right key press
  if (playerPressed === expectedAlphabet) {
    console.log("you get the point");
    // score update

    const currentScore = getTextElementByID("current-score");
    const updatedScore = currentScore + 1;
    setTextElementByID("current-score", updatedScore);
    // 1. get the current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // 2. increase the score
    // const newScore = currentScore + 1;

    // 3. show the update score
    // currentScoreElement.innerText = newScore;

    // start a new round
    removeBackgroundColorByID(expectedAlphabet);
    continueGame();
  } else {
    console.log("you missed. you lost a life");
    // life update
    const currentScore = getTextElementByID("current-life");
    const updatedLife = currentScore - 1;
    setTextElementByID("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

    // // 1. get the current life
    // const currentLifElement = document.getElementById("current-life");
    // const currentLifeText = currentLifElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // // 2. decrease the life
    // const newLife = currentLife - 1;

    // // 3. update new life
    // currentLifElement.innerText = newLife;
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  // step-1: Generate random alphabet
  const alphabet = getARandomAlphabet();

  // step-2 set randomly generated alphabet
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  setBackgroundColorByID(alphabet);
}
// Game over function
function gameOver() {
  removeByID("play-ground");
  showByID("final-score");

  // update final score
  // 1. get the last score
  const lastScore = getTextElementByID("current-score");
  setTextElementByID("last-score", lastScore);

  // clear the last selected alphabet
  const CurrentAlphabet = getElementTextByID("current-alphabet");
  removeBackgroundColorByID(CurrentAlphabet);
}

// game play function
function play() {
  removeByID("home-page");
  removeByID("final-score");
  showByID("play-ground");

  // Reset Life and Score
  setTextElementByID("current-life", 5);
  setTextElementByID("current-score", 0);

  continueGame();
}
