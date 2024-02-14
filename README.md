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
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

### Unfixed Bugs


## Deployment



- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-running-2.0/index.html 


## Credits 

- I referred to this StackOverflow thread when trying to determine where to place the link to the Javascript file to allow my website to load as quickly as possible: https://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup. Because of this thread, I chose to use the asynchronus loading attribute my srcipt elements.

### Content 

- The questions and answers for the quiz were taken from this website https://www.radiotimes.com/quizzes/pub-quiz-general-knowledge/
- The incons used in the h2 at the top of the page and in the footer were taken from Font Awesome https://fontawesome.com/ 

### Media

There is no media included in this site

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process! 