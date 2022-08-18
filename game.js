const question = document.getElementById('question');
const choice = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {}
let acceptAnswer = true;
let score = 0;
