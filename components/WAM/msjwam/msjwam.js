import { change } from '../../changegame/changegame'
import { score, wam } from '../WAM'
import './msjwam.css'

export const finwam = (towin) => {
  const playg = document.querySelector('.playg')

  const divmsj = document.createElement('div')
  const msj = document.createElement('p')

  divmsj.classList = 'divmsj'

  if (score <= towin) {
    msj.innerText = `LOSER! You had to whac at least ${towin} moles to win`
  } else {
    msj.innerText = `That's a WIN! You've whacked off ${score} moles`
  }

  divmsj.appendChild(msj)
  playg.appendChild(divmsj)

  const restbut = document.createElement('button')
  restbut.innerText = 'Restart game'
  restbut.classList = 'restwam'
  divmsj.appendChild(restbut)

  restbut.addEventListener('click', () => {
    const area = document.querySelector('.games')
    area.innerHTML = ''
    wam()
    change()
  })
}
