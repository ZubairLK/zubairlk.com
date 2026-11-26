const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({isIntersecting, target}) => {
      if (!isIntersecting) return;
      target.classList.add('arrived');
      observer.unobserve(target);
    });
  }, {threshold: .12});
  document.querySelectorAll('.media-item').forEach((item, index) => {
    item.style.setProperty('--entry-delay', `${index * 70}ms`);
    observer.observe(item);
  });
}
