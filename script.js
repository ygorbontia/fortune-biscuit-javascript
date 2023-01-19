const screen1 = document.querySelector('.closed-biscuit')
const screen2 = document.querySelector('.opened-biscuit')
const fortuneBiscuit = screen1.querySelector('img')
const anotherBiscuitButton = screen2.querySelector('button')
const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão",
  "Defeitos e virtudes são apenas dois lados da mesma moeda",
  "A maior de todas as torres começa no solo",
  "Não há que ser forte. Há que ser flexível",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida",
  "A juventude não é uma época da vida, é um estado de espírito",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
]
let randomPhraseNumber = Math.round(Math.random() * 10)
let timerOpenBiscuit

fortuneBiscuit.onmouseover = () => {
  timerOpenBiscuit = setTimeout(() => {
    toggleScreen()

    screen2.querySelector('p').innerHTML = phrases[randomPhraseNumber]
  }, 1000)
}

fortuneBiscuit.onmouseout = () => {
  clearTimeout(timerOpenBiscuit)
}

anotherBiscuitButton.onclick = () => {
  toggleScreen()
  randomPhraseNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}