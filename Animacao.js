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

/*Comentarios reais*/
const testimonials = [
  {
    text: "Gostaria de expressar a minha admiração pela equipa desta clínica. Desde a receção, sempre atenciosas, até aos terapeutas, que demonstram profissionalismo e carinho. Sinto-me sempre bem acolhida.",
    author: "Beatriz Rodrigues",
    origin: "Paciente Clínica Pysho X"
  },
  {
    text: "Um grande obrigado à Beatriz que foi minha fisioterapeuta, e a toda a equipa da MoveClinics, sempre muito simpáticos e atenciosos.",
    author: "Maria da Silva Madeira",
    origin: "Paciente Clínica Almada"
  }
];

let currentIndex = 0;

const textEl = document.getElementById('testimonial-text');
const authorEl = document.getElementById('testimonial-author');
const originEl = document.getElementById('testimonial-origin');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateTestimonial(index) {
  currentIndex = index;
  
  // Atualiza conteúdo
  textEl.textContent = testimonials[currentIndex].text;
  authorEl.textContent = testimonials[currentIndex].author;
  originEl.textContent = testimonials[currentIndex].origin;
  
  // Atualiza Dots
  dots.forEach((dot, i) => {
    const isActive = i === currentIndex;
    dot.classList.toggle('active', isActive);
    dot.setAttribute('aria-selected', isActive);
  });
}

function handleNavClick(newIndex, button) {
  updateTestimonial(newIndex);
  
  // Animação de pulso
  button.classList.remove('pulse-animation');
  void button.offsetWidth; // Reset animation
  button.classList.add('pulse-animation');
}

nextBtn.addEventListener('click', () => {
  let next = (currentIndex + 1) % testimonials.length;
  handleNavClick(next, nextBtn);
});

prevBtn.addEventListener('click', () => {
  let prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
  handleNavClick(prev, prevBtn);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => handleNavClick(index, dot));
});