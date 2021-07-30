function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("The DNA stands for?", ["Deoxic Nuclei Acid", "Deoxy Nucleus Acid","Deoxyriobic Nucleic Acid", "Deoxy ribo Nucleic Acid"], "Deoxy ribo Nucleic Acid"),
    new Question("How many bones are in the human body?", ["300", "206", "204", "188"], "206"),
    new Question("The concept of gravity was discovered by which famous physicist?", ["Sir Isaac Newton", "Neils Bohr","Robert Adler", "Pieter Zeeman"], "Sir Isaac Newton"),
    new Question("What is the hardest natural substance on Earth?", ["Graphite", "Diamond", "Quartz", "Limestone"], "Diamond"),
    new Question("Which is the main gas that makes up the Earth's atmosphere?", ["Nitrogen", "Oxygen", "Neon", "Hydrogen"], "Nitrogen"),
    new Question("Humans and chimpanzees share roughly how much DNA?", ["10%", "90%", "95%", "98%"], "98%"),
    new Question("What is the most abundant gas in the Earth's atmosphere?", ["Helium", "Kryton", "Argon", "Nitrogen"], "Nitrogen"),
    new Question("Roughly how long does it take for the sun's light to reach Earth - 8 minutes, 8 hours or 8 days?", ["8 Hour", "8 Seconds", "8 Minutes", "8 Days"], "8 Minutes"),
    new Question("Which famous British physicist wrote A Brief History of Time?", ["Stephen Hawking", "Richard Feynman", "Carl Sagan", "Galileo Galilei"], "Stephen Hawking"),
    new Question("At what temperature are Celsius and Fahrenheit equal?", ["1°", "90°", "-40°", "0°"], "-40°"),
    new Question("What modern-day country was Marie Curie born in?", ["U.S.A", "Poland", "Ireland", "Sweden"], "Poland"),
    new Question("What is the biggest planet in our solar system?", ["Jupiter", "Saturn", "Earth", "Neptune"], "Jupiter"),
    new Question("What name is given for the number of protons found in the nucleus of an atom?", ["Atomic Number", "Atomicity", "Valency", "Atomic mass"], "Atomic Number"),
    new Question("How many vertebrae does the average human possess?", ["33", "34", "23", "31"], "33"),
    new Question("What was the name of the first man-made satellite launched by the Soviet Union in 1957?", ["Tiros 1", "Aryabhata", "Sputnik 1", "Skylab"], "Sputnik 1"),
    new Question("Which oath of ethics taken by doctors is named after an Ancient Greek physician?", ["Hippocratic Oath", "allegiance oath", "Judicial Oath", "Witnesses Oath"], "Hippocratic Oath"),
    new Question("What is a material that will not carry an electrical charge called?", ["Insulator", "Conductor", "Magnet", "Magnetite"], "Insulator"),
    new Question("Which Apollo moon mission was the first to carry a lunar rover?", ["Apollo 11", "Apollo 12", "Apollo 10", "Apollo 15"], "Apollo 11"),
    new Question("How many teeth does an adult human have?", ["31", "32", "30", "35"], "32"),
    new Question("What is the study of mushrooms called?", ["Cosmology", "Botany", "Zoology", "Mycology"], "Mycology")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();