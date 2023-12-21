const container = document.getElementById('container');

fetch('https://api.mangadex.org/manga?limit=10&includes%5B%5D=cover_art')
  .then((res) => res.json())
  .then((data) => {
    var response = data.data[0];
    console.log(response);
    var title = response.attributes.title.en;
    var description = response.attributes.description.en;
    var mangaId = response.id;
    var fileName = response.relationships[2].attributes.fileName;
  })
  .catch((err) => console.log(err));

const search = document.querySelector('.search-box input'),
  images = document.querySelectorAll('.image-box');
search.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    let searcValue = search.value,
      value = searcValue.toLowerCase();
    images.forEach((image) => {
      if (value === image.dataset.name) {
        return (image.style.display = 'block');
      }
      image.style.display = 'none';
    });
  }
});
search.addEventListener('keyup', () => {
  if (search.value != '') return;
  images.forEach((image) => {
    image.style.display = 'block';
  });
});
