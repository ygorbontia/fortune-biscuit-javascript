const screen1 = document.querySelector('.closed-biscuit')
const screen2 = document.querySelector('.opened-biscuit')
const fortuneBiscuit = screen1.querySelector('img')
const anotherBiscuitButton = screen2.querySelector('button')

fortuneBiscuit.onmouseover = () => {
  setTimeout(() => {
    toggleScreen()
  }, 1200)
}

anotherBiscuitButton.onclick = () => {
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}