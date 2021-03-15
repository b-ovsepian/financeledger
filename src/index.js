import './sass/main.scss';
import { headerHandler } from './js/headerHandler';
import lightbox from 'lightbox2/dist/js/lightbox';

window.lightbox = lightbox;
window.lightbox.option({
  disableScrolling: true,
  positionFromTop: 200,
});
