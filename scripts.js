window.addEventListener('load', () => document.getElementById('preloader').style.display = 'none');
const scrollToTop = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => scrollToTop.style.display = window.scrollY > 300 ? 'block' : 'none');
scrollToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
document.querySelectorAll('.accordion-item h3').forEach(h3 => h3.addEventListener('click', () => {
const p = h3.nextElementSibling; p.style.maxHeight = p.style.maxHeight ? null : p.scrollHeight + 'px'; }));
const hamburger = document.querySelector('.hamburger'), navUl = document.querySelector('nav ul');
hamburger.addEventListener('click', () => navUl.classList.toggle('active'));