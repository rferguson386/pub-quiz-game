/* declaring various variables here so they can be reused by multiple functions */
let userName;
let currentQuestionCounter = 0;
let questions = ['ARRAY ENTRIES NEEDED HERE'];


/* declaring variables for section ids so we can add or remove the hide class to them when functions run */
const introContent = document.getElementById('intro-content');
const quizProgress = document.getElementById('quiz-progress');
const quizQuestions = document.getElementById('quiz-questions');
const quizFeedback = document.getElementById('quiz-feedback');
const finalScore = document.getElementById('final-score');
const runningScore = document.getElementById('quiz-running-score');

/* declaring variable for the username form, we need to add an event listner on the form element ID,
rather than the submit input element to prevent the default event of the form GET method */
const userNameForm = document.getElementById('username-form');

userNameForm.addEventListener('submit', startGame);

/* The main function to start the game */
function startGame(event) {
    event.preventDefault();
    let userCurrentAnswer = 'TO BE DEFINED';
    let correctScoreCount = 0;
    let incorrectScoreCount = 0;
    let userInputValue = userNameForm.elements['userName'].value;
    /* check that the entry does not contain any numbers and also is not an undefined, null, 0, NaN or empty string value */
    if (!hasNumber(userInputValue) && userInputValue) {
        userName = userInputValue;
        console.log('the game will start now');
        displayQuestionSection()
    } else {
        alert("I think you can choose a better name than that! Please enter a username without any numeric characters");
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
    setQuestionNumberDisplay();
}

function setQuestionNumberDisplay() {
    currentQuestionCounter++;
    /* Set the value of the message telling the user what question they are on */
    let currentQuestionNumberDisplay = document.getElementById('question-number')
    currentQuestionNumberDisplay.innerHTML = `<p>Question number ${currentQuestionCounter}</p>`;
    greetings();
}

function greetings() {
    let currentGreeting = document.getElementById('first-question-greeting');
    currentGreeting.innerHTML = `
    <p>Hello ${userName}, here is the first question:</p>`
}