import { getData } from './links.js';

function drawPic() {
  fetch(getData).then((response)=> response.json()).then((photos)=> {
    const pictemp = document.querySelector('#picture').content;
    const picture = pictemp.querySelector('.picture');
    const pictures = document.querySelector('.pictures');
    const piece = document.createDocumentFragment();
    for (let i = 0; i < photos.length; i++) {
      const newPic = picture.cloneNode(true);
      const image = newPic.querySelector('.picture__img');
      const comments = newPic.querySelector('.picture__comments');
      const likes = newPic.querySelector('.picture__likes');
      image.src = photos[i].url;
      comments.textContent= photos[i].comments;
      likes.textContent= photos[i].likes;
      piece.appendChild(newPic);
    }
    pictures.appendChild(piece);
  }
  ).catch((error) => {throw new Error(error);});
}
export {drawPic};
