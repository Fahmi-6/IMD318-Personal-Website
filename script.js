// Smooth scroll reveal effect
const sections = document.querySelectorAll('main section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});
