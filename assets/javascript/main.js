/* declaring various variables here so they can be reused by multiple functions */
let userName;
let currentQuestionCounter = 0;
let userAnswers = [];
let correctScoreCount = 0;
let incorrectScoreCount = 0;
let playThroughCount = 0;

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
        Question: 'In what year was the movie Titanic released? (enter the year only in the YYYY format)',
        Answer: '1997'
    },
    {
        Question: 'What element is denoted by the chemical symbol Sn in the periodic table?',
        Answer: 'Tin'
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
        Question: 'In what US state is the city Nashville?',
        Answer: 'Tennessee'
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


/* declaring variables for section and div ids so we can add or remove the hide class to them when functions need to do that */
const introContent = document.getElementById('intro-content');
const introText = document.getElementById('intro-text');
const quizProgress = document.getElementById('quiz-progress');
const quizQuestions = document.getElementById('quiz-questions');
const quizFeedback = document.getElementById('quiz-feedback');
const answerFeedback = document.getElementById('answer-feedback');
const runningScore = document.getElementById('quiz-running-score');
const returningUser = document.getElementById('returning-user');
const feedback = document.getElementById('feedback');
const finalScoreButton = document.getElementById('final-score');
const playAgainButton = document.getElementById('play-again');
const nextQuestionButton = document.getElementById('next-question');

/* declaring variable for the username form and question answer form, we need to add an event listner on the form element ID,
rather than the submit input element to prevent the default event of the form GET method */
const userNameForm = document.getElementById('username-form');
const userAnswerForm = document.getElementById('current-question-form');

/* these variables only come into play in the second playthrough of the quiz */
const secondPlaythroughIntroContent = document.getElementById('second-playthrough-text');

/* Setting up event listeners that need to be done before quiz flow begins */
userNameForm.addEventListener('submit', startGame);
userAnswerForm.addEventListener('submit', answerValidation);

/* The main function to start the game */
function startGame(event) {
    event.preventDefault();
    let userInputValue = userNameForm.elements['userName'].value.trim();
    /* check that the entry does not contain any numbers and also is not an undefined, null, 0, NaN or empty string value */
    if (!hasNumber(userInputValue) && userInputValue) {
        userName = userInputValue;
        displayGameContent();
    } else {
        alert("I think you can choose a better name than that! Please enter a username which is not blank text and doesn't contain any number characters");
    }
}

/* This was taken from stack overflow answer about how to check if strings contain numeric values */
function hasNumber(myString) {
    return /\d/.test(myString);
}

function displayGameContent() {
    introContent.classList.add('hide'); /* hide intro message (inc username form) */
    quizProgress.classList.remove('hide'); /* display info about current question number */
    quizQuestions.classList.remove('hide'); /* display quiz question */
    runningScore.classList.remove('hide'); /* display running scores */
    setQuestionArea();
}

/* Use this only when displaying the first question in the quiz */
function greetings() {
    let currentGreeting = document.getElementById('first-question-greeting');
    currentGreeting.innerHTML = `
    <p>Hello ${userName}, here is the first question:</p>`;
}

/* Prepares the quiz question area so all sections are displayed, and can then have content written by subfunctions */
function setQuestionArea() {
    /* the line below resolves a bug where the text area on questions 2 and above was appearing with the previous answer in the box */
    userAnswerForm.elements['userAnswer'].value = '';
    currentQuestionCounter++;
    /* Set the value of the message telling the user what question they are on */
    let currentQuestionNumberDisplay = document.getElementById('question-number');
    currentQuestionNumberDisplay.innerHTML = `<h2>Question number ${currentQuestionCounter}</h2>`;
    /* check if the user should see the greeting message or not */
    if (currentQuestionCounter === 1) {
        greetings();
    } else {
        document.getElementById('first-question-greeting').classList.add('hide');
    }
    quizQuestions.classList.remove('hide'); /* display quiz questions section */
    quizFeedback.classList.add('hide'); /* hide answer feedback section */
    answerFeedback.classList.add('hide'); /* hide specific answer feedback */
    setQuestionText(currentQuestionCounter);
}

/* Sets the question by fetching it from the question property in the array index position
which is 1 less than the current question number (by using the currentQuestionCounter variable) */
function setQuestionText(questionNumber) {
    let currentQuestion = document.getElementById('current-question');
    let questionIndex = questionNumber - 1;
    currentQuestion.innerHTML = `
    <h3>${questions[questionIndex].Question}</h3>`;
}

function answerValidation(event) {
    event.preventDefault();
    let userAnswer = userAnswerForm.elements['userAnswer'].value.trim();
    /* check that the entry is not blank */
    if (userAnswer) {
        userAnswers.push(userAnswer);
        setFeedbackArea();
    } else {
        alert("I didn't catch that, please enter the answer again, making sure it's not blank text, then hit the submit button");
    }
}

/* Prepares the answer feedback so all sections are displayed, and can then have content written by subfunctions */
function setFeedbackArea() {
    quizQuestions.classList.add('hide'); /* hide quiz questions section */
    quizFeedback.classList.remove('hide'); /* display answer feedback section */
    answerFeedback.classList.remove('hide'); /* display specific answer feedback - still to be written at this point */
    setFeedbackText(currentQuestionCounter);
    if (currentQuestionCounter === 10) {
        nextQuestionButton.classList.add('hide');
        finalScoreButton.classList.remove('hide');
        finalScoreButton.addEventListener('click', finalScoreDisplay);
    } else {
        /* Upon clicking the next question button we loop back to a previous function to display the question area */
        document.getElementById('next-question').addEventListener('click', setQuestionArea);
    }
}

/* Sets the question by fetching it from the answer property in the array index position
which is 1 less than the current question number (by using the currentQuestionCounter variable) */
function setFeedbackText(questionNumber) {
    let answerIndex = questionNumber - 1;
    if (questions[answerIndex].Answer.toLowerCase() == userAnswers[answerIndex].toLowerCase()) {
        feedback.innerHTML = `
        Congratulations ${userName}, you got that question correct`;
        addCorrectScore();
    } else {
        feedback.innerHTML = `
        I'm sorry ${userName}, you got that question wrong, the answer should have been ${questions[answerIndex].Answer}`;
        addIncorrectScore();
    }
}

function addCorrectScore() {
    correctScoreCount++;
    document.getElementById('correct-score-tally').innerHTML = correctScoreCount + ' correct answers';
}

function addIncorrectScore() {
    incorrectScoreCount++;
    document.getElementById('incorrect-score-tally').innerHTML = incorrectScoreCount + ' incorrect answers';
}

function finalScoreDisplay() {
    quizProgress.classList.add('hide'); /* hide quiz progress section */
    quizFeedback.classList.remove('hide'); /* display answer feedback section */
    answerFeedback.classList.remove('hide'); /* display specific answer feedback */
    quizQuestions.classList.add('hide'); /* hide quiz questions section */
    finalScoreButton.classList.add('hide');
    feedback.innerHTML = `
    Congratulations ${userName}, you answered ${correctScoreCount} questions correctly and ${incorrectScoreCount} questions incorrectly. Click the play again button if you would like to play the quiz again.`;
    playAgainButton.classList.remove('hide');
    playAgainButton.addEventListener('click', playAgain);
}

function playAgain() {
    alert('Awesome, you have chosen to play the game again');
    playThroughCount++;
    secondPlaythrough();
}


/**
 * The function to start the game a second time
 */
function secondPlaythrough() {
    /* all sections need to be hidden again */
    quizProgress.classList.add('hide');
    quizQuestions.classList.add('hide');
    quizFeedback.classList.add('hide');
    answerFeedback.classList.add('hide');
    runningScore.classList.add('hide');
    playAgainButton.classList.add('hide');
    nextQuestionButton.classList.remove('hide');

    /* display second playthrough intro content */
    introContent.classList.remove('hide');
    introText.classList.add('hide');
    secondPlaythroughIntroContent.classList.remove('hide');
    returningUser.innerHTML = userName;


    /* Reset quiz progress values */
    currentQuestionCounter = 0;
    userAnswers = [];
    correctScoreCount = 0;
    incorrectScoreCount = 0;
    playThroughCount = 0;
    document.getElementById('correct-score-tally').innerHTML = '0 correct answers';
    document.getElementById('incorrect-score-tally').innerHTML = '0 incorrect answers';

    /* Start game with current username if the user chooses */
    document.getElementById('keep-name').addEventListener('click', displayGameContent);
}