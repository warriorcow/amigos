const quoteElement = document.querySelector('.quote');

if (quoteElement) {
  const observerQuote = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        quoteElement.classList.add('active');
      }
    })
  }, {
    rootMargin: '0px',
    threshold: 1,
  });

  observerQuote.observe(quoteElement);
}

