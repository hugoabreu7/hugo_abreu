function navBarButton() {
  const button = document.querySelector('.nav-bar-button-secondary-hover');
  if (button) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight * 8) {
        button.classList.remove('nav-bar-button-secondary-hover');
        button.classList.remove('nav-bar-button-colored');
        button.classList.remove('nav-bar-button-main-hover');
        button.classList.add('nav-bar-button-no-display');
      }
      else if (window.scrollY >= window.innerHeight * 7) {
        button.classList.remove('nav-bar-button-no-display');
        button.classList.remove('nav-bar-button-secondary-hover');
        button.classList.remove('nav-bar-button-colored');
        button.classList.add('nav-bar-button-main-hover');
      }
      else if (window.scrollY >= window.innerHeight * 6) {
        button.classList.remove('nav-bar-button-no-display');
        button.classList.remove('nav-bar-button-main-hover');
        button.classList.remove('nav-bar-button-colored');
        button.classList.add('nav-bar-button-secondary-hover');
      }
      else if (window.scrollY >= window.innerHeight * 5) {
        button.classList.remove('nav-bar-button-no-display');
        button.classList.remove('nav-bar-button-secondary-hover');
        button.classList.remove('nav-bar-button-colored');
        button.classList.add('nav-bar-button-main-hover');
      }
      else if (window.scrollY >= window.innerHeight * 4) {
        button.classList.remove('nav-bar-button-secondary-hover');
        button.classList.remove('nav-bar-button-main-hover');
        button.classList.remove('nav-bar-button-colored');
        button.classList.add('nav-bar-button-no-display');
      }
      else if (window.scrollY >= window.innerHeight * 2) {
        button.classList.remove('nav-bar-button-no-display');
        button.classList.remove('nav-bar-button-secondary-hover');
        button.classList.remove('nav-bar-button-main-hover');
        button.classList.add('nav-bar-button-colored');
      }
      else {
        button.classList.remove('nav-bar-button-no-display');
        button.classList.remove('nav-bar-button-main-hover');
        button.classList.remove('nav-bar-button-colored');
        button.classList.add('nav-bar-button-secondary-hover');
      }
    });
  }
}

navBarButton();
