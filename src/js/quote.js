const quoteElement = document.querySelector('.quote');
const quotes = quoteElement?.dataset?.quotes;

if (quoteElement && quotes) {
  const arrayOfQuotes = JSON.parse(quotes);

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

  if (arrayOfQuotes.length > 1) {
    console.log('quotes > 1')
    const maxIterations = arrayOfQuotes.length;
    let countQuote = 0;
    observerQuote.observe(quoteElement);

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
  }

  if (arrayOfQuotes.length === 1) {
    observerQuote.observe(quoteElement);
    setQuoteData(0);
  }

  if (arrayOfQuotes.length === 0 || !arrayOfQuotes)  {
    quoteElement.remove();
  }

  function setQuoteData(index) {
    const quoteTextElement = quoteElement.querySelector('.quote__text');
    const quoteNameElement = quoteElement.querySelector('.quote__name');
    const quoteImageElement = quoteElement.querySelector('.quote__image img');

    quoteTextElement.innerText = arrayOfQuotes[index].text;
    quoteNameElement.innerText = arrayOfQuotes[index].name;
    quoteImageElement.src = arrayOfQuotes[index].image;
  }
} else {
  if (quoteElement) {
    quoteElement.remove();
  }
}

