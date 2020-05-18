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

