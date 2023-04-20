function checkForm() {
  const form = document.querySelector('.img-upload__form');
  const pristine = new Pristine({
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
  });
  function validateComment (comment) {
    return comment.length >= 20 && comment.length <= 140;
  }

  pristine.addValidator(
    form.querySelector('.text__description'),
    validateComment,
    'Коментарий от 20 до 140 символов' );
}

export {checkForm};
