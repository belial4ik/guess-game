const inputNumber = document.querySelector(".input-number")
const scoreBox = document.querySelector(".score-box")
const totalBox = document.querySelector(".total-box")
const button = document.querySelector("#button")
const number = document.querySelector("#number")

const secretNumber = +Math.floor((Math.random() * 9) + 1)
const attempts = []

button.addEventListener("click", showNumber)
console.dir(inputNumber)
inputNumber.autofocus = true

function showNumber() {
  const attemptScoreDiv = document.createElement('div')
  const attemptScoreH2 = document.createElement('p')
  const num = +inputNumber.value
  const div = document.createElement('div');
  const paragraph = document.createElement('p');
  attemptScoreDiv.appendChild(attemptScoreH2)
  paragraph.innerText = num

  if(num != '' && (num > 0 && num < 10)) {
    div.appendChild(paragraph)
  }

  totalBox.appendChild(div)
  inputNumber.value = ''

  if(num != secretNumber) {  
    if(num > 0 && num < 10) {
      attempts.push(num)
    } 
  } else {
    const changeText = document.querySelector('.change-text');
    const number = document.querySelector('#number');
    changeText.innerText = 'Congrats'
    changeText.style.color = 'green'
    number.innerText = secretNumber
    attempts.push(num)
    attemptScoreH2.innerText = `you made ${attempts.length} attempts`
    scoreBox.appendChild(attemptScoreDiv)
    button.disabled = true
    button.style.background = 'tomato'
    button.innerText = 'X'
  }   
}

