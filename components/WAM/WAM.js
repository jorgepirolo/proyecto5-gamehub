import { finwam } from './msjwam/msjwam'
import './WAM.css'

export let score = 0
let time = 60
export let molecreations
export let timerInterval

export const wam = () => {
  time = 60
  score = 0
  const games = document.querySelector('.games')

  const section = document.createElement('section')
  const whac = document.createElement('h2')
  const scoreshow = document.createElement('p')
  const timep = document.createElement('p')
  const start = document.createElement('div')
  const inst = document.createElement('p')
  const easy = document.createElement('button')
  const medium = document.createElement('button')
  const hard = document.createElement('button')

  whac.innerText = 'Whac-A-Mole'
  section.id = 'WAM'
  scoreshow.innerText = `Your score: ${score}`
  timep.innerText = `Time: ${time} seconds`
  start.className = 'difc'
  inst.innerText = 'Choose a difficulty to start the game'
  easy.innerText = 'Easy Peasy 🍼'
  medium.innerText = 'Regular Human 🙂'
  hard.innerText = "Let's get stressed ☠️"

  start.appendChild(inst)
  start.appendChild(easy)
  start.appendChild(medium)
  start.appendChild(hard)

  const playground = document.createElement('div')
  playground.classList = 'playg'

  section.appendChild(whac)
  section.appendChild(scoreshow)
  playground.appendChild(start)
  section.appendChild(timep)
  section.appendChild(playground)
  games.appendChild(section)

  const lluviatopos = () => {
    let ancho = playground.offsetWidth
    let alto = playground.offsetHeight

    const topo = document.createElement('img')
    topo.classList = 'topillo'
    topo.src = '/assets/mole.png'

    let posX = Math.floor(Math.random() * (ancho - 80))
    let posY = Math.floor(Math.random() * (alto - 80))

    topo.style.left = posX + 'px'
    topo.style.top = posY + 'px'

    playground.appendChild(topo)

    topo.addEventListener('click', () => {
      topo.remove(), score++
      scoreshow.innerText = `Your score: ${score}`
    })
  }

  let topdif = (time) => {
    clearInterval(molecreations)
    molecreations = setInterval(function () {
      const topo = document.querySelector('.topillo')
      if (topo) {
        topo.remove()
      }
      lluviatopos()
    }, time)
  }

  const countdown = (towin) => {
    clearInterval(timerInterval)

    timerInterval = setInterval(function () {
      time--
      timep.innerText = `Time: ${time} seconds`
      if (time === 0) {
        clearInterval(timerInterval)

        clearInterval(molecreations)
        const topo = document.querySelector('.topillo')
        if (topo) {
          topo.remove()
        }
        finwam(towin)
        time = 60
        score = 0
      }
    }, 1000)
  }

  const startgame = (dific, towin) => {
    time = 60
    score = 0
    countdown(towin)
    start.remove()
    lluviatopos()
    topdif(dific)
  }

  easy.addEventListener('click', () => startgame(2000, 24))
  medium.addEventListener('click', () => startgame(1000, 48))
  hard.addEventListener('click', () => startgame(750, 64))
}
