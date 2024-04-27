import './background.css'

export const printbg = () => {
  const section = document.querySelector('.chooser')
  const boywalk = document.createElement('img')
  boywalk.src =
    'https://i.pinimg.com/originals/fd/9f/05/fd9f054d689fe704def84b14fba3d202.gif'
  boywalk.classList = 'boywalk'
  section.appendChild(boywalk)
}
