/* declaring various variables here so they can be reused by multiple functions */
let userName = 'empty string';
let currentQuestionNumber = 0;
let questions = ['ARRAY ENTRIES NEEDED HERE'];

/* declaring variables for section ids so we can add or remove the hide class to them when functions run */
const introContent = document.getElementById('intro-content');
const quizProgress = document.getElementById('quiz-progress');
const quizQuestions = document.getElementById('quiz-questions');
const quizFeedback = document.getElementById('quiz-feedback');
const finalScore = document.getElementById('final-score');
const runningScore = document.getElementById('quiz-running-score');

/* declaring variable for the username form */
const userNameForm = document.getElementById('username-form');

userNameForm.addEventListener('submit', startGame);

/* The main function to start the game */
function startGame(event) {
    event.preventDefault();
    let userCurrentAnswer = 'TO BE DEFINED';
    let correctScoreCount = 0;
    let incorrectScoreCount = 0;
    let userInputValue = userNameForm.elements['userName'].value;
    console.log(userName);
    if (userNameInput(userInputValue)) {
        userName = userInputValue;
        displayQuestionSection()
    } else {
        alert('please enter a username without any numeric characters');
    }
}

/* Username validation testing- we don't want the username to include any numeric characters or be null or undefined */
function userNameInput(myString) {
    let userNameTest = hasNumber(myString);
    if (!userNameTest && userName !== null || undefined) {
        console.log('the game will start now');
        return true;
    } else {
        return false;
    }
}

/* This was taken from stack overflow answer about how to check if strings contain numeric values */
function hasNumber(myString) {
    return /\d/.test(myString);
}

function displayQuestionSection() {
    introContent.classList.add('hide');
    quizProgress.classList.remove('hide');
    quizQuestions.classList.remove('hide');
}