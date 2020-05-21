const scoreDisplay = document.querySelector('#final-score'), 
      score = localStorage.getItem('finalScore'),
      scoreMessage = document.querySelector('#message')

scoreDisplay.textContent = score

if (score == 40){
   scoreMessage.innerHTML = 'Great. You got all correct!'
}

if (score < 50 && score > 20){
   scoreMessage.innerHTML = "Good job. You almost got it all."
}

if (score < 30 && score > 0){
   scoreMessage.innerHTML = "Nice.. but could be better."
}

if (score == 0){
   scoreMessage.innerHTML = "Oops! You got none correct... try again?"
}
