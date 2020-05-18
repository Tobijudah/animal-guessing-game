const question = document.querySelector("#question");
const counter = document.querySelector("#counter");
const message = document.querySelector("#error");
const button = document.querySelector("#button");
const scoreDisplay = document.querySelector("#score");
const input = document.querySelector('#input')
let score;
let answer;
let chances;
let currentQuestion;

const database = [
	{
		question: "what is a meow sounder",
		answer: "t",
	},
	{
		question: "what is a meow sounder",
		answer: "cat",
	},
	{
		question: "what is a meow sounder",
		answer: "cat",
	},
	{
		question: "what is a meow sounder",
		answer: "cat",
	},
	{
		question: "what is a meow sounder",
		answer: "cat",
	},
	{
		question: "what is a meow sounder",
		answer: "cat",
	},
	{
		question: "what is a meow sounder",
		answer: "cat",
	},
	{
		question: "what is a meow sounder",
		answer: "cat",
	},
];

const init = () => {
	score = 0;
	currentQuestion = 0;
	chances = 3;
	displayQuestion();
};

const displayQuestion = () => {
	question.innerText = database[currentQuestion].question;
	answer = database[currentQuestion].answer;
};


init();
