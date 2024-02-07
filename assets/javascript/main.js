let userName = 'empty string';

let startButton = document.getElementById('username-form');

startButton.addEventListener('submit', startGame);

function startGame(event) {
    event.preventDefault();
    let currentQuestionNumber = 0;
    let questions = ['ARRAY ENTRIES NEEDED HERE'];
    let userCurrentAnswer = 'TO BE DEFINED';
    let correctScoreCount = 0;
    let incorrectScoreCount = 0;
    console.log(userName);
    userName = document.getElementById('username-form').elements['userName'].value;
    console.log(userName);
}