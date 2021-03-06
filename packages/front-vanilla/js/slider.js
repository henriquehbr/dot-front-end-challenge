const $$ = document.querySelectorAll.bind(document)

const sliderResponsivity = flkty => {
  if (window.innerWidth <= 720) {
    $$('.slider-cell').forEach(sliderCell => sliderCell.classList.add('mobile'))
    flkty.resize()
  } else if (document.querySelectorAll('.slider-cell.mobile')) {
    $$('.slider-cell').forEach(sliderCell => sliderCell.classList.remove('mobile'))
    flkty.resize()
  }
}

export const slider = () => {
  const sliderElement = document.querySelector('#slider')
  const flkty = new Flickity(sliderElement, {
    pageDots: false,
    cellAlign: 'left'
  })

  window.onresize = () => sliderResponsivity(flkty)
}
