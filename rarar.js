const btn = document.getElementById('submit');
const attempts = document.getElementById('attempts');
const chances = document.getElementById('chances');
const label = document.getElementById('label');

let minNum = 1;
let maxNum = 6;
let gameRunning = true;
let result = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
let attemptCount = 0;
let chancesCount = 4;

btn.addEventListener("click", () => {

    if (!gameRunning) return;
        const inp = parseInt(document.getElementById('inp').value, 10);
    
    if (isNaN(inp) || inp < minNum || inp > maxNum) {
        label.textContent = `Please Enter A number Between ${minNum} - ${maxNum}`;
        return;
    }
    
        attemptCount ++;
        chancesCount --;

        attempts.textContent = attemptCount;
        chances.textContent = chancesCount;

    if (inp === result){
        label.textContent = `you've won 100$ for guessing the right number : ${result}`;
        gameRunning = false;
    } else if (chancesCount === 0){
        label.textContent = 'You have run out of chances';
        gameRunning = false;
    } else {
        label.textContent = 'Try Again'
    }


    
});

const refill = document.getElementById('refill');

refill.addEventListener('click', () => {
    // Reset chances and attempts
    chancesCount = 4;
    attemptCount = 0;
    result = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    gameRunning = true;

    // Update the UI
    chances.textContent = chancesCount;
    attempts.textContent = attemptCount;
    label.textContent = 'Game restarted! Guess the new number.';
});