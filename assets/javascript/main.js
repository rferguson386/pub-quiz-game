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
        Question: 'When was the movie Titanic released?',
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
const introText = document.getElementById('intro-text');
const quizProgress = document.getElementById('quiz-progress');
const quizQuestions = document.getElementById('quiz-questions');
const quizFeedback = document.getElementById('quiz-feedback');
const answerFeedback = document.getElementById('answer-feedback');
const runningScore = document.getElementById('quiz-running-score');
const returningUser = document.getElementById('returning-user');
const feedback = document.getElementById('feedback');

/* declaring variable for the username form and question answer form, we need to add an event listner on the form element ID,
rather than the submit input element to prevent the default event of the form GET method */
const userNameForm = document.getElementById('username-form');
const userAnswerForm = document.getElementById('current-question-form')

/* these variables only come into play in the second playthrough of the quiz */
const secondPlaythroughIntroContent = document.getElementById('second-playthrough-text');

/* Setting up event listeners that need to be done before quiz flow begins */
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
        displayGameContent()
    } else {
        alert("I think you can choose a better name than that! Please enter a username without any numeric characters");
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
    <p>Hello ${userName}, here is the first question:</p>`
}

/* Prepares the quiz question area so all sections are displayed, and can then have content written by subfunctions */
function setQuestionArea() {
    /* the line below resolves a bug where the text area on questions 2 and above was appearing with the previous answer in the box */
    userAnswerForm.elements['userAnswer'].value = '';
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
    quizQuestions.classList.remove('hide'); /* display quiz questions section */
    quizFeedback.classList.add('hide'); /* hide answer feedback section */
    answerFeedback.classList.add('hide'); /* hide specific answer feedback */
    if (currentQuestionCounter <= 9) {
        setQuestionText(currentQuestionCounter);
    }
}

/* Sets the question by fetching it from the question property in the array index position
which is 1 less than the current question number (by using the currentQuestionCounter variable) */
function setQuestionText(questionNumber) {
    let currentQuestion = document.getElementById('current-question');
    let questionIndex = questionNumber - 1;
    currentQuestion.innerHTML = `
    <p>${questions[questionIndex].Question}</p>`
    console.log(questions[questionIndex]);
    /*  console.log(questions[questionIndex].key[Question]); */
    console.log(questions[questionIndex].Question);
}

function answerValidation(event) {
    event.preventDefault();
    let userAnswer = userAnswerForm.elements['userAnswer'].value;
    /* check that the entry is not blank */
    if (userAnswer) {
        userAnswers.push(userAnswer);
        setFeedbackArea();
    } else {
        alert("I didn't catch that, please enter the answer again and hit the submit button");
    }
}

/* Prepares the answer feedback so all sections are displayed, and can then have content written by subfunctions */
function setFeedbackArea() {
    quizQuestions.classList.add('hide'); /* hide quiz questions section */
    quizFeedback.classList.remove('hide'); /* display answer feedback section */
    answerFeedback.classList.remove('hide'); /* display specific answer feedback - still to be written at this point */
    setFeedbackText(currentQuestionCounter);
    if (currentQuestionCounter === 10) {
        document.getElementById('final-score').addEventListener('click', finalScoreDisplay);
    } else {
        /* Upon clicking the next question button we loop back to a previous function to display the question area */
        document.getElementById('next-question').addEventListener('click', setQuestionArea);
    }
}

/* Sets the question by fetching it from the answer property in the array index position
which is 1 less than the current question number (by using the currentQuestionCounter variable) */
function setFeedbackText(questionNumber) {
    let answerIndex = questionNumber - 1;
    console.log('answer index is ', answerIndex, 'question answer is ', questions[answerIndex].Answer, 'user answer is ', userAnswers[answerIndex]);
    if (questions[answerIndex].Answer.toLowerCase() == userAnswers[answerIndex].toLowerCase()) {
        feedback.innerHTML = `
        <p>Congratulations ${userName}, you got that question correct</p>`;
        addCorrectScore();
    } else {
        feedback.innerHTML = `
        <p>I'm sorry ${userName}, you got that question wrong, the answer should have been ${questions[answerIndex].Answer}</p>`;
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
    feedback.innerHTML = `
    Congratulations ${userName}, you answered ${correctScoreCount} questions correctly and ${incorrectScoreCount} questions incorrectly. Would you like to play the quiz again?`;
    let playAgainButton = document.getElementById('play-again');
    playAgainButton.innerText = 'Play again';
    playAgainButton.addEventListener('click', playAgain);
}

function playAgain() {
    alert('you have chosen to play the game again');
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

    /* display second playthrough intro content */
    introContent.classList.remove('hide');
    introText.classList.add('hide');
    secondPlaythroughIntroContent.classList.remove('hide');
    console.log('line 227', userName);
    /* Include username in the second playthrough intro content */
    console.log(returningUser);
    returningUser.innerHTML = userName;
    console.log('line 232', userName);

    /* Change the play again button back to function as the next question button */
    let nextQuestionButton = document.getElementById('play-again');
    nextQuestionButton.innerHTML = 'Next question';
    nextQuestionButton.id = ('next-question');

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