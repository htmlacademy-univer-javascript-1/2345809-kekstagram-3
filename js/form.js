function checkForm() {
  const form = document.querySelector('.img-upload__form');
  const pristine = new Pristine(form, {
    classTo: 'form__item',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__item',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
  });
  form.addEventListener('submit',(evt)=>{
    if(!(pristine.validate())){
      evt.preventDefault();
    }
  });
}
export {checkForm};
