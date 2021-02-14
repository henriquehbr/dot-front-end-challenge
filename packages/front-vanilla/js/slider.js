export const slider = () => {
  const sliderElement = document.querySelector('#slider')
  new Flickity(sliderElement, {
    pageDots: false,
    cellAlign: 'center',
    groupCells: 3
  })
}
