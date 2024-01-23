import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41985459-07284690ed1bbc3dd300f203e';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');
const buttonEl = document.querySelector('.button');
const galleryEl = document.querySelector('.gallery');

function fetchImage(imageName) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${imageName}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

formEl.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const query = form.elements.query.value;
  if (!query) {
    onFetchError();
    return;
  }

  fetchImage(query)
    .then(data => {
      if (!data.hits.length) {
        onFetchError();
      }
      galleryEl.innerHTML = createMarkup(data.hits);
      const refreshGallery = new SimpleLightbox('.gallery-item a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      refreshGallery.refresh();
    })
    .catch(onFetchError)
    .finally(() => form.reset());
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
    />
    <p class= "gallery-text">• Likes: ${likes} • Views: ${views} • Comments: ${comments} •</span> Downloads:${downloads}</p>
  </a>
</li>`
    )
    .join('');
}
galleryEl.innerHTML = createMarkup(data.hits);

function onFetchError(error) {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    messageColor: '#fff',
    messageSize: '20px',
    backgroundColor: '#EF4040',
    close: false,
    closeOnClick: true,
    progressBarEasing: 'linear',
  });
}
