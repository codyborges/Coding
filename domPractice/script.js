//DOM variable
let numBtn = document.querySelector('button')
let rando = document.querySelector('.randNumber')
let answer = document.querySelector('#outcome')
console.log(numBtn, rando, answer)


//Event Listeners
numBtn.addEventListener('click', checkLotto)


//Functions
//get random number between 1-10
//conditional, if even then winner else loser
function checkLotto(){
let num = Math.floor(Math.random() * 10 + 1) 
rando.innerHTML = num
console.log(num)

if (num % 2 == 0){
  answer.innerHTML = 'You win'
}else {
  answer.innerHTML = 'Loser'
  answer.style.color = 'red'
}

}
