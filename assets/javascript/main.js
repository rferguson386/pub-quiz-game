/* userName is declared as a global variable so it can be reused by multiple functions */
let userName = 'empty string';

let startButton = document.getElementById('username-form');

startButton.addEventListener('submit', startGame);

/* The main function to start the game */
function startGame(event) {
    event.preventDefault();
    let currentQuestionNumber = 0;
    let questions = ['ARRAY ENTRIES NEEDED HERE'];
    let userCurrentAnswer = 'TO BE DEFINED';
    let correctScoreCount = 0;
    let incorrectScoreCount = 0;
    userName = document.getElementById('username-form').elements['userName'].value;
    console.log(userName);
    userNameInput(userName);
}

/* Username validation testing- we don't want the username to include any numeric characters or be null or undefined */
function userNameInput(myString) {
    let userNameTest = hasNumber(myString);
    if (userNameTest === false) {
        if (userName !== null || undefined) {
            console.log('the game will start now');
            displayQuestion();
        }
    } else {
        console.log('please enter a username without any numeric characters');
    }
}

/* This was taken from stack overflow answer about how to check if strings contain numeric values */
function hasNumber(myString) {
    return /\d/.test(myString);
}

function displayQuestion() {
    hideSection('intro-content');
    displaySection('quiz-progress');
    displaySection('quiz-questions');
}

function hideSection(section) {
    document.getElementById(section).style.display = 'none';
}

function displaySection(section) {
    document.getElementById(section).style.display = 'flex';
}