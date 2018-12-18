function navBar() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight * 0.04) {
        navbar.classList.add('navbar-white');
      } else {
        navbar.classList.remove('navbar-white');
      }
    });
  }
}

function navBarButton() {
  const button = document.querySelector('.nav-bar-button');
  if (button) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight * 0.04) {
        button.classList.remove('nav-bar-button-secondary-hover');
        button.classList.add('nav-bar-button-colored');
      } else {
        button.classList.remove('nav-bar-button-colored');
        button.classList.add('nav-bar-button-secondary-hover');
      }
    });
  }
}

navBar();
navBarButton();