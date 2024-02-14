# Pub Quiz Game

# Intro

This project is a quiz game to meet the requirements of portfolio project number 2 in the full stack development course. I chose to make it a general knowledge pub-quiz style of game to keep it fun for the users.

Users will be asked 10 general knowledge questions, similar in difficulty level to those they might find in a typical pub quiz.

It is intended for anyone who likes playing pub quizzes and wants to test themselves against an online version of this experience.

![Responsive Mockup](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/responsive-mockup.png)

## Features 

### Existing Features

- __Introduction__

The introduction greets the user and sets out what they can expect for the quiz, as well as telling them how to start the quiz if they decide to play.
 

![Introduction](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/introduction.png)

- __Username selector__

The username selector allows users to choose a username, which is then referred to throughout the quiz, as they receive feedback on each answer, and in the final score feedback. There is a validation function in the quiz code checking the user has not entered a blank username, or one that contains numeric characters. If the validation fails, the user is prompted to re-enter their name via an alert message.
 
![Username selector](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/username-selector.png)

- __Question number indicator__

 The question number indicator shows the user which question number they are on at the time they are asked a question, and when they receive feedback on their answer.

![Question number indicator](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/question-number-indicator.png)

- __Answer input__

 The answer input allows users to provide an answer, which is then checked against the answer property in an array of objects relating to the quiz questions, to determine if the user was correct in their answer, or not. There is a validation function checking the answer the user inputs to make sure that it is not a blank text string, or does not contain a series of blank characters in the string before they type their name.

 If the validation fails, the user is prompted to re-enter their answer via an alert message.

![Answer input](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/answer-input.png)

- __Running score indicator__ 

  The running score indicator shows the user how many questions they have got right, and wrong, as they progress through the quiz.

![Running score indicator](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/running-score-indicator.png)

- __Question answer feedback__

 The question-answer feedback tells the user whether their answer was correct or not, and if it was not, what the correct answer was. The "next question" button allows users to click on it to progress in the game when they are ready

![Question answer feedback](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/question-answer-feedback.png)

- __Final score feedback__

 The final score feedback tells the user how many questions they got correct, and how many they answered incorrectly. They are also offered the chance to play the quiz again, by clicking on the "play again" button.

![Final score feedback](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/final-score-feedback.png)


- __Username choice for second playthrough__

If the user chooses to play again when they receive their final score feedback, they are presented with the option to either continue with their previous username or to enter a new one. Either option starts the quiz again from question one, and their choice of username is referenced as they progress through the quiz.

![Username choice](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/username-choice.png)

- __Footer__

The footer simply features information about the website author, and a link to my LinkedIn profile.

![Footer](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/introduction.png)



### Features Left to Implement

- Time limit to give answers in
- Creating a bank of 100 questions, of which 10 are randomly selected to be the quiz questions at the point the quiz begins.

## Testing 

## Compatibility

In order to confirm the correct functionality and appearance of the site, it was tested on the following browsers: Chrome, Firefox and Safari. The images below for each browser show the website is displaying correctly and all features described in the readme are present.

+ Chrome:

    - Intro:

    ![Intro](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/chrome/introduction.png)

    - Quiz Feedback:

    ![Quiz Feedback](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/chrome/quiz-feedback.png)

    - Final score:

    ![Final score](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/chrome/final-score.png)


+ Firefox:

    - Intro:

    ![Intro](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/firefox/introduction.png)

    - Quiz Feedback:

    ![Quiz Feedback](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/firefox/quiz-feedback.png)

    - Final score:

    ![Final score](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/firefox/final-score.png)

During testing for Firefox, I noticed that the submit input was displaying different text than on safari and chrome, because I had not set the value attribute, so I added this to the code to standardise the input across browsers. The screeshots before and after the fix are below:

- Before:
![Before](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/firefox/before.png)

- After:
![After](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/firefox/after.png)

+ Safari:

     - Intro:

    ![Intro](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/safari/introduction.png)

    - Quiz Feedback:

    ![Quiz Feedback](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/safari/quiz-feedback.png)

    - Final score:

    ![Final score](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/safari/final-score.png)


## Responsiveness


+ The website was checked for responsiveness via the Responsive viewer chrome extension.

    - All devices:

    ![All devices](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/all-devices.png)

### Validator Testing 

- HTML
  - No errors were returned when passing through the official ![W3C validator](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/html-validator.png)
- CSS
  - No errors were found when passing through the official ![(Jigsaw) validator](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/css-validator.png)
- Javascript
  - 38 warnings and no errors were found by the JSHint validator. All of the warnings related to the availability of template literal syntax, let and const variable types in different browsers, apart from the choice of using bracket notation to access an element's id attribute value. ![(JSHint) validator](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/javascript-validator.png)

+ ## LightHouse report

    - Using lighthouse in devtools I confirmed that the website is performing well, accessible and colors and fonts chosen are readable.

  ![Lighthouse report](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/lighthouse-report.png)

### Unfixed Bugs

There is a bug relating to a password manager (Lastpass) extension in Chrome which causes the error screenshotted below to show up. This error does not show on an incognito browser in chrome.

![Error](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/browser-extension-error.png)

## Deployment

### Deployment to Github pages:

The site was deployed to GitHub pages. The steps to deploy are as follows:
In the GitHub repository, navigate to the Settings tab
Select Pages in the side navigation bar
From the source section drop-down "Franch, select the Main Branch
Once the Main branch has been selected, hit "Save" and the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://rferguson386.github.io/pub-quiz-game/

### Local Deployment
To make a local copy, use the following command in your terminal:
git clone https://github.com/rferguson386/pub-quiz-game.git  


## Credits 

- My mentor Julia Konovalova was very helpful in guiding me through the planning process of the quiz. We workshopped a user journey which I used as the basis for deciding what functions needed to be called and when. Based on her advice, I recreated our conversation into a miro board to help me understand the flow of what needs to happen and when. The actual functions didn't turn out exactly like the flow in the Miro board when I finished the code, but it was close.

A link to view the miro board is included below:

[Miro board](https://github.com/rferguson386/pub-quiz-game/blob/main/assets/images/readme/Pub-quiz-website-miro-v1.pdf)

I used a function from a stack overflow post to incorporate a check on numeric characters in strings into my username validation function. The borrowed code is commented in the JS file, and the source is available here https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript

I copied some code from the love running walkthrough videos to override browser default styles, this code is identified with a comment in the style.css file.

### Content 

- The questions and answers for the quiz were taken from this website https://www.radiotimes.com/quizzes/pub-quiz-general-knowledge/
- The icons used in the h2 at the top of the page and in the footer were taken from Font Awesome https://fontawesome.com/ 


### Media

There are no media included in this site apart form the font awesome icons.

