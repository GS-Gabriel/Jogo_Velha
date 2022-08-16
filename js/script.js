const input = document.querySelector('.login__input')
const input2 = document.querySelector('.login__input2')
const button = document.querySelector('.login__button')
const form = document.querySelector('.login-form')
var cpu = true
var partida = "unico"
input2.setAttribute('disabled', '')

function modoJogoP() {
  cpu = false
  input2.removeAttribute('disabled')
}
function modoJogoC() {
  cpu = true
  input2.setAttribute('disabled', '')
}
function modoJogoU() {
  partida = "unico"
}
function modoJogoT() {
  partida = 0
}

const validateInput = ({ target }) => {
  if (target.value.length > 4) {
    button.removeAttribute('disabled')
    return;
  }

  button.setAttribute('disabled', '')
}

const handleSubmit = (event) => {
  event.preventDefault();
  
  localStorage.setItem('player1', input.value)
  if (cpu) {
    localStorage.setItem('player2', "CPU")
  } else {
    localStorage.setItem('player2', input2.value)
  }
  localStorage.setItem('cpu', cpu)
  localStorage.setItem('partida', partida)
  window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)

function select1() {
  document.getElementById('pp').style.borderBottom = "3px solid rgb(233, 75, 75)"
  document.getElementById('pc').style.borderBottom = "none"
}
function select2() {
  document.getElementById('pp').style.borderBottom = "none"
  document.getElementById('pc').style.borderBottom = "3px solid rgb(233, 75, 75)"
}
function select3() {
  document.getElementById('pu').style.borderBottom = "3px solid rgb(233, 75, 75)"
  document.getElementById('md').style.borderBottom = "none"
}
function select4() {
  document.getElementById('pu').style.borderBottom = "none"
  document.getElementById('md').style.borderBottom = "3px solid rgb(233, 75, 75)"
}