import { landscapeImages } from './api';

window.addEventListener('load', () => {
  fetchImages();
});

/* Fetch images from API */
async function fetchImages() {
  const response = await fetch(landscapeImages);
  const json = await response.json();

  /* Build Carousel */
  document.querySelector('main').innerHTML = `
    <div class="carousel">
      <ul>
        ${json.hits.map(function(item) {
          return `<li><img src="${item.previewURL}"></li>`
        }).join('')}
      </ul>
    </div>
    <button>Next</button>
    <button>Previous</button>
  `;
}
