'use strict'

require('./index.css')

// hosted courtesy of github
const narutoSrc = `https://raw.githubusercontent.com/ngoue/animeXYZ/main/naruto.gif`

module.exports = function (options) {
  // get options (defaults set here)
  const {duration, size} = Object.assign({
    duration: 500,
    size: 50,
  }, options)

  // create and style components
  const container = document.createElement('div')
  container.id = `animexyz-naruto`
  container.style.left = `-${size}px`
  container.style.animationDuration = `${(duration/1000)}s`

  const img = document.createElement(`img`)
  img.src = narutoSrc
  img.style.height = `${size}px`

  // add elements to the DOM
  container.appendChild(img)
  document.body.appendChild(container)

  // remove after animating
  setTimeout(() => {
    container.remove()
  }, duration)
}
