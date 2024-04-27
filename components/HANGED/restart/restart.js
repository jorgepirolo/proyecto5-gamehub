import { hanged } from '../hanged'

export const restartbutton = () => {
  const but = document.createElement('button')
  but.innerText = 'Restart game'
  but.classList = 'restartbut'

  const hangedsect = document.querySelector('#hanged')
  hangedsect.appendChild(but)

  but.addEventListener('click', () => {
    const games = document.querySelector('.games')
    games.innerHTML = ''
    hanged()
  })
}
