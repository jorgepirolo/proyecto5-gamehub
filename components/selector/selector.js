import { change } from '../changegame/changegame'
import { hanged } from '../HANGED/hanged'
import { til } from '../TIL/TIL'
import { wam } from '../WAM/WAM'
import './selector.css'

export const selector = () => {
  const div = document.querySelector('.games')

  const section = document.createElement('section')
  const welc = document.createElement('h1')
  const choose = document.createElement('p')
  const tilgame = document.createElement('h2')
  const wamgame = document.createElement('h2')
  const hangedgame = document.createElement('h2')

  welc.innerText = 'WELCOME TO MY GAME HUB'
  choose.innerText = ' Please choose a game '
  tilgame.innerText = 'Three in a Line'
  wamgame.innerText = 'Whac-A-Mole'
  hangedgame.innerText = 'Hanged'
  section.classList = 'chooser'

  section.appendChild(welc)
  section.appendChild(choose)
  section.appendChild(tilgame)
  section.appendChild(wamgame)
  section.appendChild(hangedgame)

  div.appendChild(section)

  const selected = () => {
    section.innerHTML = ''
    div.innerHTML = ''
  }

  tilgame.addEventListener('click', () => {
    selected()
    til()
    change()
  })
  wamgame.addEventListener('click', () => {
    selected()
    wam()
    change()
  })
  hangedgame.addEventListener('click', () => {
    selected()
    hanged()
    change()
  })
}
