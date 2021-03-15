import './sass/main.scss';
import $ from 'jquery';
import lightbox from 'lightbox2/dist/js/lightbox';

window.onscroll = function () {
  headerHandler();
};

const header = document.getElementById('header');

function headerHandler() {
  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

function scrollHandler() {
  $('.site-nav__link').on('click', function (event) {
    event.preventDefault();
    const target = $(this);
    const element = target.attr('href');
    $('body, html').animate(
      {
        scrollTop: $(element).offset().top - header.offsetHeight,
      },
      800,
    );
  });
}

scrollHandler();
window.lightbox = lightbox;
window.lightbox.option({
  disableScrolling: true,
  positionFromTop: 200,
});
