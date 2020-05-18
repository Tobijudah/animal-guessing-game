let score,
 	 answer,
 	 chances,
 	 currentQuestion,
	  answeredCorrect;
	  
const question = document.querySelector("#question"),
		counter = document.querySelector("#counter"),
		message = document.querySelector("#error"),
		submitButton = document.querySelector("#submit"),
		nextButton = document.querySelector("#next"),
		scoreDisplay = document.querySelector("#score"),
		input = document.querySelector('#input');

const database = [
	{
		question: "what is a meow sounder",
		answer: "t",
	},
	{
		question: "what is a bark sounder",
		answer: "cat",
	},
	{
		question: "what is a mooo sounder",
		answer: "cat",
	},
	{
		question: "what is a hiss sounder",
		answer: "cat",
	},
	{
		question: "what is a bleat sounder",
		answer: "cat",
	},
	{
		question: "what is a neigh sounder",
		answer: "cat",
	},
	{
		question: "what is a oink sounder",
		answer: "cat",
	},
	{
		question: "what is a cry sounder",
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
