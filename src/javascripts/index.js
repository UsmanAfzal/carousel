import { landscapeImages } from './api';

window.addEventListener('load', () => {
  carousel();
});

async function carousel() {

  /* Fetch images */
  const response = await fetch(landscapeImages);
  const json = await response.json();

  /* Build carousel */
  document.querySelector('main').innerHTML = `
    <div class='carousel'>
      <ul>
        ${json.hits.map(function (item) {
    return `
      <li>
        <div>
          <img src='${item.webformatURL}' alt='${item.tags}'>
          <h2>${item.tags}</h2>
        </div>
      </li>`}).join('')}
      </ul>
    </div>
    <div class='button--group'>
      <button>Next</button>
      <button>Previous</button>
    </div>
  `;

  const jsonLength = json.hits.length;
  const carousel = document.querySelector('.carousel');
  const ul = document.querySelector('ul');
  const prev = document.getElementsByTagName('button')[1];
  const next = document.getElementsByTagName('button')[0];
  let direction = -1;

  /* Previous button */
  prev.addEventListener('click', function() {
    if(direction === -1 ) {
      ul.appendChild(ul.firstElementChild);
      direction = 1;
    }
    carousel.style.justifyContent = 'flex-end';
    ul.style.transform = 'translate(' + 100 / jsonLength + '%)';
  });

  /* Next button */
  next.addEventListener('click', function() {
    if(direction === 1 ) {
      ul.prepend(ul.lastElementChild);
      direction = -1;
    }
    carousel.style.justifyContent = 'flex-start';
    ul.style.transform = 'translate(-' + 100 / jsonLength + '%)';;
  });

  /* Carousel state changes */
  ul.addEventListener('transitionend', function() {
    if(direction === -1) {
      ul.appendChild(ul.firstElementChild);
    } else if (direction === 1) {
      ul.prepend(ul.lastElementChild);
    }

    ul.style.transition = 'none';
    ul.style.transform = 'translate(0)';
    setTimeout(function() {
      ul.style.transition = 'all 0.5s';
    });
  });
}
