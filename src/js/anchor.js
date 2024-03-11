const anchors = document.querySelectorAll('[data-anchor]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', () => {
    const targetElement = document.querySelector(anchor.dataset.anchor)
    targetElement.scrollIntoView({
      behavior: 'smooth'
    })
  })
})
