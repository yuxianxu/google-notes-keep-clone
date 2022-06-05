class App {
  constructor() {
    
    this.addEventListeners()
  }

  addEventListeners() {
    document.body.addEventListener('click', event => {
        this.handleFormClick(event)
    })
  }

  handleFormClick(event) {
      const isFormClicked = this.$form.contains(event.target)

      if(isFormClicked) {
          this.openForm()
      } else {
          this.closeForm()
      }
  }




}

new App();
