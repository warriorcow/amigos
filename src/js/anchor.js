const anchors = document.querySelectorAll('[data-anchor]');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    history.replaceState(null, null, ' ');
  }, 10)
})
anchors.forEach(anchor => {
  anchor.addEventListener('click', () => {
    if (window.location.pathname === '/') {
      const targetElement = document.querySelector(anchor.dataset.anchor)
      targetElement.scrollIntoView({
        behavior: 'smooth'
      })
    } else {
      window.location.href = `/${anchor.dataset.anchor}`
    }
  })
})
