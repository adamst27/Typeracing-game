const inputField = document.getElementById("writingInput");
const timeSpan = document.getElementById("time");
const scoreSpan = document.getElementById("score");
const wordsDiv = document.querySelector(".words");
const startButton = document.getElementById("gameInit");
startButton.addEventListener("click", startGame)
let timer
const words = ["Hello", "Thing", "Ahlan", "Morocco", "Tetouan"]
function startGame() {
  startTime()
  inputField.addEventListener("input", checkWord);

}
function startTime() {
  let time = 6;
  timer = setInterval(() => {
    time--;
    timeSpan.textContent = time;
    if (timeSpan.innerHTML === '0') {
      clearInterval(timer);
      alert("Time is up");
    }
  }, 1000);
}
function checkWord(e) {
  if (words.includes(e.target.value)) {
    scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
    inputField.value = "";
    clearInterval(timer); // Clear the timer
    startTime(); // Restart the timer


  }
}
words.forEach((word) => {
  const wordElement = document.createElement("p");
  wordElement.textContent = word;
  wordsDiv.appendChild(wordElement);
})