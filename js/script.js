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
	checkAnswer();
	next()
};

const displayQuestion = () => {
	question.innerText = database[currentQuestion].question;
	answer = database[currentQuestion].answer;
};

const checkAnswer = () => {

	submitButton.addEventListener('click', function(){

		if (input.value === answer){
			input.classList.remove('bad')
			input.classList.add('good')
			input.disabled = true
			showMessage(`${answer} is correct. Well-done!`, 'green')
			submitButton.disabled = true
			nextButton.disabled = false
			score += 5
			scoreDisplay.textContent = score
			// input.setAttribute.disabled = 'true'
			answeredCorrect = true
			currentQuestion ++
		} 
		
		else {

			chances -= 1

			if (chances === 0) {
				input.disabled = true
				showMessage(`You've run out of chances, the answer is ${answer}`, 'red')
				submitButton.disabled = true
				nextButton.disabled = false
				score -= 1
				scoreDisplay.textContent = score
			} else {
				showMessage(`${input.value} is wrong. Try again`, '#db1414')
				input.classList.add('bad')
				setTimeout(clearError, 2000)
			}
		}

	})
	
}

const next = () => {

	nextButton.addEventListener('click', function(){

		reset()
		displayQuestion()

	})
}


const showMessage = (messageContent, messageColor) => {
	message.textContent = messageContent;
	message.style.color = messageColor
}

const clearError = () => {
	message.textContent = ''
	input.classList.remove('bad')
	input.value = ''
}

const reset = () => {
	nextButton.disabled = true
	submitButton.disabled = false
	input.disabled = false
	input.classList.remove('good')
	input.value = ''
	message.textContent = ''
}

init();
