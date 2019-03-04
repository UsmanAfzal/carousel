const apiKey = '9656065-a4094594c34f9ac14c7fc4c39';
const landscapeImages = 'https://pixabay.com/api/?key=' + apiKey + '&q=beautiful+landscape&image_type=photo';

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
