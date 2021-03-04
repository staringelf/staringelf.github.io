

const formsApp =  {
  init () {
    this.buttons = $$('.btn--secondary');
    this.forms = $$('.container--form');
    this.setupEventListeners();
  },

  setupEventListeners () {
    const toggleForm = this.toggleForm.bind(this);
    this.buttons.forEach(button => button.addEventListener('click', toggleForm));
  },

  toggleForm () {
    this.forms.forEach(form => form.classList.contains('hide') ? form.classList.remove('hide') : form.classList.add('hide'));
  }

} 

formsApp.init();

console.log('hey it works!!');


