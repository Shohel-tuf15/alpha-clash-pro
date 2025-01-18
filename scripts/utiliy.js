function removeByID(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("hidden");
}

function showByID(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("hidden");
}

function setBackgroundColorByID(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("bg-orange-300");
}
function removeBackgroundColorByID(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("bg-orange-300");
}

function getTextElementByID(elementID) {
  const element = document.getElementById(elementID);
  const elementValueText = element.innerText;
  const elementValue = parseInt(elementValueText);
  return elementValue;
}

function getElementTextByID(elementID) {
  const element = document.getElementById(elementID);
  const text = element.innerText;
  return text;
}

function setTextElementByID(elementID, value) {
  const element = document.getElementById(elementID);
  element.innerText = value;
}
function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  //   generate random number

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];

  return alphabet;
}
