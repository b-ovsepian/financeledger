window.onscroll = function () {
  headerHandler();
};

const header = document.getElementById('header');

export function headerHandler() {
  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
