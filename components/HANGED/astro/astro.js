import './astro.css'

export const astro = () => {
  const drawdiv = document.createElement('div')
  const astrodiv = document.createElement('div')

  astrodiv.classList = 'astrodiv'
  drawdiv.classList = 'drawdiv'

  for (let i = 1; i < 7; i++) {
    const img = document.createElement('img')
    img.src = `/assets/${i}.png`
    img.classList = `astropic ast${i} noshow`
    astrodiv.appendChild(img)
  }

  const frame = document.createElement('img')
  frame.src = '/assets/post.png'
  frame.classList = 'frame'

  const hanged = document.querySelector('#hanged')
  drawdiv.appendChild(astrodiv)
  drawdiv.appendChild(frame)

  hanged.appendChild(drawdiv)
}
