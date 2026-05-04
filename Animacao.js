/*Animacao de transição(Beta)*/
const revealPage = () => {
    document.body.classList.add('page-servicos-loaded'); 
};

window.addEventListener('DOMContentLoaded', revealPage);

window.addEventListener('pageshow', (event) => {
    document.body.classList.remove('page-servicos-loaded');
    setTimeout(revealPage, 50); 
});

/* Test*/
const reveals = document.querySelectorAll('.reveal');

const handleReveal = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('load', handleReveal);

window.addEventListener('scroll', handleReveal);