const quoteElement = document.querySelector('.quote');

if (quoteElement) {
  const quotes = quoteElement.dataset.quotes;

  if (quotes) {
    const quoteTextElement = quoteElement.querySelector('.quote__text');
    const quoteNameElement = quoteElement.querySelector('.quote__name');
    const quoteImageElement = quoteElement.querySelector('.quote__image img');

    const arrayOfQuotes = JSON.parse(quotes);
    const maxIterations = arrayOfQuotes.length;
    const observerQuote = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setQuoteData(0);
          quoteElement.classList.add('active');
        }
      })
    }, {
      rootMargin: '0px',
      threshold: 1,
    });

    observerQuote.observe(quoteElement);

    let countQuote = 0
    setInterval(() => {
      quoteElement.classList.remove('active');
      quoteElement.classList.add('disable');
      countQuote++;
      setTimeout(() => {
        if (countQuote >= maxIterations) {
          countQuote = 0;
        }
        quoteElement.classList.remove('disable');
        quoteElement.classList.add('active');
        setQuoteData(countQuote);
      }, 800);
    }, 8000);

    function setQuoteData(index) {
      quoteTextElement.innerText = arrayOfQuotes[index].text;
      quoteNameElement.innerText = arrayOfQuotes[index].name;
      quoteImageElement.src = arrayOfQuotes[index].image;
    }
  } else {
    quoteElement.remove();
  }
}
