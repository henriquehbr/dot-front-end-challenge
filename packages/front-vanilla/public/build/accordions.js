const $$ = document.querySelectorAll.bind(document)

const closeAllAccordions = accordionHeaders =>
  accordionHeaders.forEach(accordionHeader => {
    accordionHeader.classList.remove('open')
    accordionHeader.nextElementSibling.classList.remove('open')
    accordionHeader.querySelector('i').classList.remove('open')
  })

const toggleAccordion = accordionHeader => {
  if (accordionHeader.classList.contains('open')) {
    accordionHeader.classList.remove('open')
    accordionHeader.nextElementSibling.classList.remove('open')
    accordionHeader.querySelector('i').classList.remove('open')
  } else {
    accordionHeader.classList.add('open')
    accordionHeader.nextElementSibling.classList.add('open')
    accordionHeader.querySelector('i').classList.add('open')
  }
}

export const accordions = () => {
  const accordionHeaders = $$('.accordion-header')
  accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', ({ target }) => {
      const accordionHeader = target.closest('.accordion-header')
      closeAllAccordions(accordionHeaders)
      toggleAccordion(accordionHeader)
    })
  })
}
