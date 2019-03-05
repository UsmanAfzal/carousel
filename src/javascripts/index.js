import { landscapeImages } from './api';

window.addEventListener('load', () => {
  fetchImages();
});

/* Fetch images from API */
async function fetchImages() {
  const response = await fetch(landscapeImages);
  const json = await response.json();
  console.log(json)

  /* Build Carousel */
  document.querySelector('main').innerHTML = `
    <div class="carousel">
      <ul>
        ${json.hits.map(function(item) {
          return `<li><img src="${item.previewURL}" alt="${item.tags}"></li>`
        }).join('')}
      </ul>
      <div class="button--group">
        <button>Next</button>
        <button>Previous</button>
      </div>
    </div>
  `;
}
