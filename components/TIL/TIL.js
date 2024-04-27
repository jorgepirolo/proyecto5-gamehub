import { msj } from './MSJ/msj'
import './TIL.css'

export const qsobj = [
  {
    square: 'q1',
    play: ''
  },
  {
    square: 'q2',
    play: ''
  },
  {
    square: 'q3',
    play: ''
  },
  {
    square: 'q4',
    play: ''
  },
  {
    square: 'q5',
    play: ''
  },
  {
    square: 'q6',
    play: ''
  },
  {
    square: 'q7',
    play: ''
  },
  {
    square: 'q8',
    play: ''
  },
  {
    square: 'q9',
    play: ''
  }
]

let turn = ''

export const til = () => {
  const games = document.querySelector('.games')
  const section = document.createElement('section')
  const gamename = document.createElement('h2')
  const choose = document.createElement('h3')

  gamename.innerText = 'THREE IN A LINE'
  choose.innerText = 'CHOOSE YOUR SIDE'
  section.appendChild(gamename)
  section.appendChild(choose)

  const divtod = document.createElement('div')
  divtod.classList = 'divide'
  const x = document.createElement('p')
  const o = document.createElement('p')
  x.innerText = 'X'
  o.innerText = 'O'
  o.classList = 'o'
  divtod.appendChild(x)
  divtod.appendChild(o)
  section.appendChild(divtod)

  x.addEventListener('click', () => {
    if (turn === '') {
      turn = 'x'
      choose.innerText = 'YOUR TURN'
      x.classList.add('turnito')
    }
  })

  o.addEventListener('click', () => {
    if (turn === '') {
      turn = 'o'
      choose.innerText = 'YOUR TURN'
      o.classList.add('turnito')
    }
  })

  const tablero = document.createElement('div')

  tablero.classList = 'tablero'
  section.appendChild(tablero)
  section.id = 'til'
  section.appendChild(tablero)
  games.appendChild(section)

  qsobj.forEach((element) => {
    const div = document.createElement('div')
    div.className = `quadro ${element.square}`
    tablero.appendChild(div)

    div.addEventListener('click', () => {
      if (turn === 'x' && div.innerText === '') {
        div.innerText = 'X'
        element.play = 'x'
        turn = 'o'
        o.classList.add('turnito')
        x.classList.remove('turnito')
      } else if (turn === 'o' && div.innerText === '') {
        div.innerText = 'O'
        element.play = 'o'
        div.classList.add('o')
        turn = 'x'
        x.classList.add('turnito')
        o.classList.remove('turnito')
      }

      const compro = (a, b, c) => {
        if (
          qsobj[a].play === qsobj[b].play &&
          qsobj[b].play === qsobj[c].play &&
          qsobj[a].play !== '' &&
          qsobj[b].play !== '' &&
          qsobj[c].play !== ''
        ) {
          turn = ''
          msj(`${qsobj[a].play} wins!`)
        } else if (
          qsobj[0].play !== '' &&
          qsobj[1].play !== '' &&
          qsobj[2].play !== '' &&
          qsobj[3].play !== '' &&
          qsobj[4].play !== '' &&
          qsobj[5].play !== '' &&
          qsobj[6].play !== '' &&
          qsobj[7].play !== '' &&
          qsobj[8].play !== ''
        ) {
          turn = ''
          msj('The game ended in a tie!')
        }
      }
      const comprall = () => {
        compro(0, 1, 2)
        compro(0, 3, 6)
        compro(3, 4, 5)
        compro(6, 7, 8)
        compro(1, 4, 7)
        compro(2, 5, 8)
        compro(0, 4, 8)
        compro(2, 4, 6)
      }
      comprall()
    })
  })
}
