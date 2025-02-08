const img = document.querySelector('#img')

const MAX_FRAMES = 151

// altura maxima del scroll
let maxScroll = document.documentElement.scrollHeight - window.innerHeight

window.addEventListener('resize', () => {
  maxScroll = document.documentElement.scrollHeight - window.innerHeight
})

window.addEventListener('scroll', () => {
  // posición actual del scroll
  const scroll = window.scrollY
  // porcentaje de scroll
  const scrollFraction = scroll / maxScroll
  // que frame toca?
  const frame = Math.floor(scrollFraction * MAX_FRAMES) || 1
  // crear el id del frame
  const id = frame.toString().padStart(3, '0')
  // cambiar la imagen
  img.src = `./frames/moto-${id}.webp`
})