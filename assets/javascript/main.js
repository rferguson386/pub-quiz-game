/* declaring various variables here so they can be reused by multiple functions */
let userName;
var currentQuestionCounter = 0;
let userAnswer;
let userAnswers = [];
let correctScoreCount = 0;
let incorrectScoreCount = 0;

/* Questions were taken from this url https://www.radiotimes.com/quizzes/pub-quiz-general-knowledge/ */
let questions = [{
        Question: 'Who wrote the book Chitty-Chitty-Bang-Bang: The Magical Car?',
        Answer: 'Ian Fleming'
    },
    {
        Question: 'In which part of your body would you find the cruciate ligament?',
        Answer: 'Knee'
    },
    {
        Question3: 'What is the name of the main antagonist in the Shakespeare play Othello?',
        Answer3: 'Iago'
    },
    {
        Question4: 'When was the movie the Titanic released?',
        Answer4: 'Tin'
    },
    {
        Question5: 'What element is denoted by the chemical symbol Sn in the periodic table?',
        Answer5: '1997'
    },
    {
        Question6: "Which popular video game franchise has released games with the subtitles World At War and Black Ops?",
        Answer6: 'Call of Duty'
    },
    {
        Question7: 'What was the most popular girls name in the UK in 2021?',
        Answer7: 'Olivia'
    },
    {
        Question8: 'What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman?',
        Answer8: "All the President's Men"
    },
    {
        Question9: 'Which comedian was the second permanent host of Never Mind the Buzzcocks after Mark Lamarr?',
        Answer9: 'Simon Amstell'
    },
    {
        Question10: 'What is the capital of Finland?',
        Answer10: 'Helsinki'
    }
];


/* declaring variables for section and div ids so we can add or remove the hide class to them when functions run */
const introContent = document.getElementById('intro-content');
const quizProgress = document.getElementById('quiz-progress');
const quizQuestions = document.getElementById('quiz-questions');
const quizFeedback = document.getElementById('quiz-feedback');
const questionFeedback = document.getElementById('question-feedback');
const finalScore = document.getElementById('final-score');
const runningScore = document.getElementById('quiz-running-score');

/* declaring variable for the username form and question answer form, we need to add an event listner on the form element ID,
rather than the submit input element to prevent the default event of the form GET method */
const userNameForm = document.getElementById('username-form');
const userAnswerForm = document.getElementById('current-question-form')

userNameForm.addEventListener('submit', startGame);
userAnswerForm.addEventListener('submit', answerValidation);

/* The main function to start the game */
function startGame(event) {
    event.preventDefault();
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
    /* NEED TO AMEND THIS SO THE GREEETING FUNCTION ISN'T CALLED EVERYTIME, ONLY THE FIRST TIME, CAN PUT IN A CONDITIONAL IF TO ACHIEVE THIS? */
    greetings();
    questionText(currentQuestionCounter);
}

console.log('line 105, outside of function scope, and the value of currentQuestionCounter is ', currentQuestionCounter);

/* Use this only when displaying the first question in the quiz */
function greetings() {
    let currentGreeting = document.getElementById('first-question-greeting');
    currentGreeting.innerHTML = `
    <p>Hello ${userName}, here is the first question:</p>`
}

/* Sets the question by fetching it from the answer property in the array index position
which is 1 less than the current question number (by using the currentQuestionCounter variable) */
function questionText(questionNumber) {
    let currentQuestion = document.getElementById('current-question');
    console.log(questionNumber);
    let questionIndex = questionNumber - 1;
    currentQuestion.innerHTML = `
    <p>${questions[questionIndex].Question}</p>`

}

function answerValidation(event) {
    event.preventDefault();
    let userAnswerValue = userAnswerForm.elements['userAnswer'].value;
    if (userAnswerValue) {
        userAnswers.push(userAnswerValue);
        console.log(userAnswers);
        quizQuestions.classList.add('hide');
        quizFeedback.classList.remove('hide');
    } else {
        alert("I didn't catch that, please enter your answer again and hit the submit button");
    }
}

function feedbackWriter(questionNumber) {

}