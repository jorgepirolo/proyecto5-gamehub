import { printbg } from '../background/background'
import { selector } from '../selector/selector'
import { molecreations } from '../WAM/WAM'
import './changegame.css'

export const change = () => {
  const divcontrol = document.createElement('div')
  const control = document.createElement('img')
  const p = document.createElement('p')

  divcontrol.classList = 'divchange'
  p.innerText = 'CHANGE GAME'
  control.src =
    'https://img.itch.zone/aW1nLzMwMDMyODcuZ2lm/315x250%23cm/ZltYcb.gif'

  divcontrol.appendChild(control)
  divcontrol.appendChild(p)

  const games = document.querySelector('.games')
  games.appendChild(divcontrol)

  divcontrol.addEventListener('click', () => {
    games.innerHTML = ''
    selector()
    printbg()
  })
}
