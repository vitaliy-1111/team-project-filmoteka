import throttle from 'lodash.throttle';

document.querySelector('.scroll-top').addEventListener('click', onScrollButton)

document.addEventListener('scroll', throttle((addScrollButton), 250))
export function addScrollButton() {
 if (window.scrollY < 300) {
   document.querySelector('.scroll-top').classList.add('visually-hidden');
  }
  if (window.scrollY > 300) {
   document.querySelector('.scroll-top').classList.remove('visually-hidden');
}
}
export function onScrollButton() {
 
  window.scrollTo(pageYOffset, 0);
}