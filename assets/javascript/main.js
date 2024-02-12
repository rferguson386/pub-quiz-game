/* declaring various variables here so they can be reused by multiple functions */
var userName;
var currentQuestionCounter = 0;
var userAnswers = [];
var correctScoreCount = 0;
var incorrectScoreCount = 0;

/* Questions were taken from this url https://www.radiotimes.com/quizzes/pub-quiz-general-knowledge/ */
const questions = [{
        Question: 'Who wrote the book Chitty-Chitty-Bang-Bang: The Magical Car?',
        Answer: 'Ian Fleming'
    },
    {
        Question: 'In which part of your body would you find the cruciate ligament?',
        Answer: 'Knee'
    },
    {
        Question: 'What is the name of the main antagonist in the Shakespeare play Othello?',
        Answer: 'Iago'
    },
    {
        Question: 'When was the movie the Titanic released?',
        Answer: 'Tin'
    },
    {
        Question: 'What element is denoted by the chemical symbol Sn in the periodic table?',
        Answer: '1997'
    },
    {
        Question: "Which popular video game franchise has released games with the subtitles World At War and Black Ops?",
        Answer: 'Call of Duty'
    },
    {
        Question: 'What was the most popular girls name in the UK in 2021?',
        Answer: 'Olivia'
    },
    {
        Question: 'What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman?',
        Answer: "All the President's Men"
    },
    {
        Question: 'Which comedian was the second permanent host of Never Mind the Buzzcocks after Mark Lamarr?',
        Answer: 'Simon Amstell'
    },
    {
        Question: 'What is the capital of Finland?',
        Answer: 'Helsinki'
    }
];


/* declaring variables for section and div ids so we can add or remove the hide class to them when functions run */
const introContent = document.getElementById('intro-content');
const quizProgress = document.getElementById('quiz-progress');
const quizQuestions = document.getElementById('quiz-questions');
const quizFeedback = document.getElementById('quiz-feedback');
const answerFeedback = document.getElementById('answer-feedback');
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
    introContent.classList.add('hide'); /* hide intro message */
    quizProgress.classList.remove('hide'); /* display info about current question number */
    quizQuestions.classList.remove('hide'); /* display quiz question */
    setQuestionNumberDisplay();
}

function setQuestionNumberDisplay() {
    currentQuestionCounter++;
    /* Set the value of the message telling the user what question they are on */
    let currentQuestionNumberDisplay = document.getElementById('question-number')
    currentQuestionNumberDisplay.innerHTML = `<p>Question number ${currentQuestionCounter}</p>`;
    /* check if the user should see the greeting message or not */
    if (currentQuestionCounter === 1) {
        greetings();
    } else {
        document.getElementById('first-question-greeting').classList.add('hide');
    }
    quizQuestions.classList.remove('hide'); /* display quiz questions */
    quizFeedback.classList.add('hide'); /* hide answer feedback section */
    answerFeedback.classList.add('hide'); /* hide specific answer feedback */
    runningScore.classList.remove('hide'); /* display running scores */
    setQuestionText(currentQuestionCounter);
}

/* Use this only when displaying the first question in the quiz */
function greetings() {
    let currentGreeting = document.getElementById('first-question-greeting');
    currentGreeting.innerHTML = `
    <p>Hello ${userName}, here is the first question:</p>`
}

/* Sets the question by fetching it from the answer property in the array index position
which is 1 less than the current question number (by using the currentQuestionCounter variable) */
function setQuestionText(questionNumber) {
    let currentQuestion = document.getElementById('current-question');
    let questionIndex = questionNumber - 1;
    currentQuestion.innerHTML = `
    <p>${questions[questionIndex].Question}</p>`
}

function answerValidation(event) {
    event.preventDefault();
    let userAnswer = userAnswerForm.elements['userAnswer'].value;
    /* check that the entry is not blank, this needs to be validated differently than the */
    if (userAnswer) {
        userAnswers.push(userAnswer);
        quizQuestions.classList.add('hide');
        quizFeedback.classList.remove('hide');
        answerFeedback.classList.remove('hide');
        feedbackWriter(currentQuestionCounter);
    } else {
        alert("I didn't catch that, please enter the answer again and hit the submit button");
    }
}

function feedbackWriter(questionNumber) {
    let answerIndex = questionNumber - 1;
    let feedback = document.getElementById('feedback');
    console.log(questions[0].Answer);
    console.log('answer index is ', answerIndex, 'question answer is ', questions[answerIndex].Answer, 'user answer is ', userAnswers[answerIndex]);
    if (questions[answerIndex].Answer == userAnswers[answerIndex]) {
        feedback.innerHTML = `
        <p>Congratulations ${userName}, you got that question correct</p>`
        addCorrectScore();
    } else {
        feedback.innerHTML = `
        <p>I'm sorry ${userName}, you got that question wrong, the answer should have been ${questions[answerIndex].Answer}</p>`
        addIncorrectScore();
    }
    document.getElementById('next-question').addEventListener('click', setQuestionNumberDisplay);
}

function addCorrectScore() {
    corectScoreCount++
    document.getElementById('correct-score-tally').innerHTML = correctScoreCount, ' correct answers';
}

function addIncorrectScore() {
    incorectScoreCount++
    document.getElementById('incorrect-score-tally').innerHTML = correctScoreCount, 'incorrect answers';
}