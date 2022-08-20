const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {}
let acceptAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQestion = [];

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1

    },
    {
        question: "What is the current syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href= 'xxx.js'>",
        choice2: "<script name = 'xxx.js'>",
        choice3: "<script src = 'xxx.js'>",
        choice4: "<script file = 'xxx.js'>",
        answer: 3

    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World')",
        choice2: "alertBox('Hello World')",
        choice3: "msg('Hello World')",
        choice4: "alert('Hello World')",
        answer: 4

    },
]

// CONSTANTS

const CORRECT_BONUS = 10;
const MAX_QUESTINS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQestion = [...questions];
    console.log(availableQestion);
    getNewQuestion();
};

getNewQuestion = () => {

    if (availableQestion.lenght == 0 || questionCounter >= MAX_QUESTINS) {
        return window.location.assign("/end.html");
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQestion.length);
    currentQuestion = availableQestion[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQestion.splice(questionIndex, 1);

    acceptingAnswer = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        console.log(e.target);
        if (!acceptingAnswer) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset("number");
        console.log(selectedAnswer);
        getNewQuestion();
    });
})

startGame();
