const animationBottomPageElements = document.querySelectorAll('[data-animate-bottom]');
const animationLeftPageElements = document.querySelectorAll('[data-animate-left]');
const animationRightPageElements = document.querySelectorAll('[data-animate-right]');

const animationElements = [...animationBottomPageElements, ...animationLeftPageElements, ...animationRightPageElements]

if (animationElements.length) {
  const observerAnimation = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('animated')
      }
    })
  }, {
    rootMargin: '0px',
    threshold: 0.2,
  });

  animationElements.forEach(element => {
    observerAnimation.observe(element);
  })
}

