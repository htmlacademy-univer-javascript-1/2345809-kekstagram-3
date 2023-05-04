import { uploadData } from './links.js';

function EscapeKeyHandler(newMessage) {
  newMessage.remove();
  document.removeEventListener('keydown', EscapeKeyHandler);
}

function putData(form, callBackfunc, openImgUpload) {
  const successTemp = document.querySelector('#success').content;
  const errorTemp = document.querySelector('#error').content;
  const errorMessage = errorTemp.querySelector('.error');
  const successMessage = successTemp.querySelector('.success');
  fetch(uploadData,
    {
      method: 'POST',
      body: new FormData(form)
    }).then((response) => {
    if (response.ok) {
      const newMessage = successMessage.cloneNode(true);
      const successButton = newMessage.querySelector('.success__button');
      successButton.addEventListener('click', () => newMessage.remove());
      const successEscapeKeyHandler = EscapeKeyHandler.bind(null, newMessage);
      document.addEventListener('keydown', successEscapeKeyHandler);
      document.body.appendChild(newMessage);
    } else {
      const newMessage = errorMessage.cloneNode(true);
      const errorButton = newMessage.querySelector('.error__button');
      errorButton.addEventListener('click', () => {
        newMessage.remove();
        openImgUpload();
      });
      const errorEscapeKeyHandler = EscapeKeyHandler.bind(null, newMessage);
      document.addEventListener('keydown', errorEscapeKeyHandler);
      document.body.appendChild(newMessage);
    }
    callBackfunc(response.ok);
  });
}
export {putData};
