import { qsobj, til } from '../TIL'
import './msj.css'

export const msj = (msj) => {
  const p = document.createElement('p')
  const tablero = document.querySelector('.tablero')
  tablero.appendChild(p)
  p.textContent = msj
  p.classList = 'winner'
  const divide = document.querySelector('.divide')
  divide.innerHTML = ''
  const h3 = document.querySelector('h3')
  h3.innerText = ''

  const button = document.createElement('button')
  tablero.appendChild(button)
  button.innerText = 'Restart game'
  button.classList = 'restartbut'

  button.addEventListener('click', () => {
    const gametil = document.querySelector('#til')
    qsobj.forEach((element) => {
      element.play = ''
    })
    gametil.remove()
    til()
  })
}
