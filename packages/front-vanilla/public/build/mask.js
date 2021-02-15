export const mask = () => {
  window.onload = () => {
    Inputmask().mask(document.querySelectorAll('.masked-input'))
  }
}
