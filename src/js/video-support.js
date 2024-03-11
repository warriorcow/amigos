const gifImages = document.querySelectorAll('[data-gif]');

gifImages.forEach(gif => {
  const gifSrc = gif.dataset.gif;
  const randomVersion = Math.floor(Math.random() * 1000);
  gif.src = `${gifSrc}?v=${randomVersion}`
})
