import { landscapeImages } from './api';

window.addEventListener('load', () => {
  fetchImages();
});

/* Fetch images from API */
async function fetchImages() {
  const response = await fetch(landscapeImages);
  const json = await response.json();

  /* Build carousel items */
  json.hits.forEach(item => {
    const el = document.createElement('div');
    el.innerHTML = `<img src="${item.previewURL}">`;
    document.querySelector('main').appendChild(el);
  });
}
