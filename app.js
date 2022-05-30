const p1Btn = document.querySelector("#p1Btn")
const p2Btn = document.querySelector("#p2Btn")
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetBtn = document.querySelector("#reset");
const playTo = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5
let isGameOver = false;

p1Btn.addEventListener("click", function() {
    if (!isGameOver) {
        if (p1Score !== winningScore) {
            p1Score += 1;
            if (p1Score === winningScore) {
                isGameOver = true;
            }
            p1Display.textContent = p1Score;
        }
    }
})
p2Btn.addEventListener("click", function() {
    if (!isGameOver) {
        if (p2Score !== winningScore) {
            p2Score += 1;
            if (p2Score === winningScore) {
                isGameOver = true;
            }
            p2Display.textContent = p2Score;
        }
    }
})

playTo.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    reset()
})

resetBtn.addEventListener("click", reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p1Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}