const $$ = document.querySelectorAll.bind(document)

export const slider = () => {
  const sliderElement = document.querySelector('#slider')
  const flkty = new Flickity(sliderElement, {
    pageDots: false,
    cellAlign: 'center'
  })

  window.onresize = () => {
    if (window.innerWidth <= 720) {
      $$('.slider-cell').forEach(sliderCell => sliderCell.classList.add('mobile'))
      flkty.reloadCells()
    } else if (document.querySelectorAll('.slider-cell.mobile')) {
      $$('.slider-cell').forEach(sliderCell => sliderCell.classList.remove('mobile'))
      flkty.reloadCells()
    }
  }
}
