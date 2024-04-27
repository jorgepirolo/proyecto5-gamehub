import { change } from '../changegame/changegame'
import { astro } from './astro/astro'
import './hanged.css'
import { restartbutton } from './restart/restart'

export const palabras = [
  'esfinge',
  'ciruela',
  'tornado',
  'bisonte',
  'hormiga',
  'cascara',
  'melodia',
  'coctel',
  'guitarra',
  'invierno',
  'fantasma',
  'murcielago',
  'orquidea',
  'tobogan',
  'saltamontes',
  'cachorro',
  'estrella',
  'radiante',
  'volar',
  'fotografia',
  'explosion',
  'caramelo',
  'paracaidas',
  'piscina',
  'misterio',
  'dinosaurio',
  'astronauta',
  'velero',
  'tesoro',
  'montanas',
  'acuarela',
  'cometa',
  'malabarista',
  'javascript',
  'murmullo',
  'solsticio',
  'trebol',
  'alabastro',
  'aurora',
  'catedral',
  'colibri',
  'neblina',
  'orilla',
  'rocio',
  'sombrero',
  'malvavisco',
  'globo',
  'guirnalda',
  'onomatopeya',
  'esmeralda'
]

export const tecladoQwerty = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

export const hanged = () => {
  change()
  let mistakes = 0
  let goodones = []

  const games = document.querySelector('.games')
  const section = document.createElement('section')
  const hanged = document.createElement('h2')

  hanged.innerText = 'Hanged'
  section.id = 'hanged'

  section.appendChild(hanged)
  games.appendChild(section)
  astro()

  const divspace = document.createElement('div')
  divspace.classList = 'divspace'
  section.appendChild(divspace)

  const randomnumber = Math.floor(Math.random() * (palabras.length + 1))

  for (const letter of palabras[randomnumber]) {
    const space = document.createElement('p')
    space.classList = 'space'
    divspace.appendChild(space)
  }

  const teclado = document.createElement('div')
  teclado.classList = 'teclado'

  const comprobar = (tecla) => {
    for (let i = 0; i < palabras[randomnumber].length; i++) {
      if (palabras[randomnumber][i] === tecla) {
        const word = document.querySelectorAll('.space')
        word[i].innerText = tecla
      }
    }
    if (!palabras[randomnumber].includes(tecla)) {
      mistakes++
      const ast = document.querySelector(`.ast${mistakes}`)
      ast.classList.toggle('noshow')
    }

    const ps = document.querySelectorAll('.space')
    goodones = []
    for (const intext of ps) {
      goodones.push(intext.innerText)
    }

    if (!goodones.includes('')) {
      teclado.innerHTML = ''
      const msjwin = document.createElement('p')
      msjwin.classList = 'msjwin'
      msjwin.innerText = `You found it, congrats! The word was "${palabras[randomnumber]}"`
      teclado.appendChild(msjwin)
      const drawdiv = document.querySelector('.drawdiv')
      drawdiv.innerHTML = ''
      const dancing = document.createElement('img')
      dancing.classList = 'dancing'
      dancing.src =
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJxN2l6c2p6MWc0N205dzFjeXhkaHB4cmY4dXpjYW0wcmgyNHJlNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MbMUCH4MUffka1ZFeT/giphy.gif'
      drawdiv.appendChild(dancing)
      restartbutton()
    }

    if (mistakes === 6) {
      teclado.innerHTML = ''
      const msjlost = document.createElement('p')
      msjlost.classList = 'msjlost'
      msjlost.innerText = `You haven't found it, loser! The word was "${palabras[randomnumber]}"`
      teclado.appendChild(msjlost)
      restartbutton()
    }
  }

  const hacerteclas = (linea) => {
    for (const letra of tecladoQwerty[linea]) {
      const tecla = document.createElement('p')
      tecla.innerText = letra
      tecla.value = letra
      tecla.classList = `tecla l${linea}`

      tecla.addEventListener('click', () => {
        if (!tecla.classList.contains('pressed')) {
          comprobar(tecla.value)
          tecla.classList.add('pressed')
        }
      })
      teclado.appendChild(tecla)
    }
  }

  hacerteclas(0)
  hacerteclas(1)
  hacerteclas(2)

  section.appendChild(teclado)
}
