import { checkForm } from './form.js';
import { putData } from './putData.js';

function bigPicture() {
  const imgUpload = document.querySelector('.img-upload__overlay');
  const fileInput = document.querySelector('.img-upload__input');
  const closeImgUploadButton = document.querySelector('.img-upload__cancel');
  const scale = document.querySelector('.scale__control--value');
  const scaleDecreaseButton = document.querySelector('.scale__control--smaller');
  const scaleIncreaseButton = document.querySelector('.scale__control--bigger');
  const previewPic = document.querySelector('.img-upload__preview img');
  const dataForm = document.querySelector('.img-upload__form');
  const slider = document.querySelector('.effect-level__slider');
  const effectValue = document.querySelector('.effect-level__value');
  const commentField = document.querySelector('.text__description');
  let currentEffect='none';

  noUiSlider.create(slider, {
    start:[1],
    range: {
      min: 0,
      max: 1
    },
    step:0.1
  });
  slider.classList.add('hidden');

  function updateSlider(min, max, step) {
    slider.noUiSlider.updateOptions({
      start: [max],
      range: {
        min,
        max
      },
      step:step
    });
  }

  function closeImgUpload(setDefault = true) {
    imgUpload.classList.add('hidden');
    document.removeEventListener('keydown', escapeKeyHandler);
    if (setDefault) {
      setScale(100);
      previewPic.classList.remove(`effects__preview--${currentEffect}`);
      previewPic.classList.add('effects__preview--');
      currentEffect = 'none';
      previewPic.style.filter='';
      updateSlider(0, 100, 1);
      commentField.value='';
      fileInput.value='';
    }
  }

  function escapeKeyHandler(ev) {
    if (ev.key === 'Escape') {
      closeImgUpload(true);
    }
  }

  function openImgUpload() {
    imgUpload.classList.remove('hidden');
    document.addEventListener('keydown', escapeKeyHandler);
  }

  fileInput.addEventListener('change', openImgUpload);

  closeImgUploadButton.addEventListener('click', closeImgUpload);

  function setScale(scl) {
    scale.value=`${String(scl)}%`;
    previewPic.style.transform=`scale(${scl/100})`;
  }

  function decreaseScale() {
    if (parseInt(scale.value, 10) > 25) {
      setScale((parseInt(scale.value, 10)) - 25);
    }
  }

  function increaseScale() {
    if (parseInt(scale.value, 10) < 100) {
      setScale((parseInt(scale.value, 10)) + 25);
    }
  }

  scaleDecreaseButton.addEventListener('click', decreaseScale);
  scaleIncreaseButton.addEventListener('click', increaseScale);

  const effectButtons = document.querySelectorAll('.effects__radio');
  function addEffectHandler(button) {
    button.addEventListener('change', ()=> {
      previewPic.classList.remove(`effects__preview--${currentEffect}`);
      previewPic.classList.add(`effects__preview--${button.value}`);
      slider.classList.remove('hidden');
      currentEffect=button.value;
      switch (currentEffect) {
        case 'chrome':
          effectValue.value=1;
          updateSlider(0,1,0.1);
          previewPic.style.filter=`grayscale(${effectValue.value})`;
          break;
        case 'sepia':
          effectValue.value=1;
          updateSlider(0,1,0.1);
          previewPic.style.filter=`sepia(${effectValue.value})`;
          break;
        case 'marvin':
          effectValue.value=100;
          updateSlider(0, 100, 1);
          previewPic.style.filter=`invert(${effectValue.value}%)`;
          break;
        case 'phobos':
          effectValue.value=3;
          updateSlider(0,3, 0.1);
          previewPic.style.filter=`blur(${effectValue.value}px)`;
          break;
        case 'heat':
          effectValue.value=3;
          updateSlider(1,3,0.1);
          previewPic.style.filter=`brightness(${effectValue.value})`;
          break;
        case 'none':
          previewPic.style.filter='';
          break;
      }
    });
  }

  for (let i = 0; i<effectButtons.length; i++) {
    addEffectHandler(effectButtons[i]);
  }

  slider.noUiSlider.on('slide', ()=> {
    effectValue.value=slider.noUiSlider.get(true);
    switch(currentEffect) {
      case 'chrome':
        previewPic.style.filter=`grayscale(${effectValue.value})`;
        break;
      case 'sepia':
        previewPic.style.filter=`sepia(${effectValue.value})`;
        break;
      case 'marvin':
        previewPic.style.filter=`invert(${effectValue.value}%)`;
        break;
      case 'phobos':
        previewPic.style.filter=`blur(${effectValue.value}px)`;
        break;
      case 'heat':
        previewPic.style.filter=`brightness(${effectValue.value})`;
        break;
    }
  });

  dataForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (checkForm(dataForm)) {
      putData(dataForm, closeImgUpload, openImgUpload);
    }
  });
}
export {bigPicture};
