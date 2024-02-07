function startGame(event) {
    event.preventDefault();
    let currentQuestionNumber = 0;
    let questions = ['ARRAY ENTRIES NEEDED HERE'];
    let userCurrentAnswer = 'TO BE DEFINED';
    let correctScoreCount = 0;
    let incorrectScoreCount = 0;
    let userName = document.getElementById('username-form').elements['userName'].value;
    return userName;
}

let startButton = document.getElementById("start-button");

startButton.addEventListener('click', startGame);

function validateUsernameInput() {
    console.log(startGame)
}