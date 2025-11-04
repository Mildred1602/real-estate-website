// Change navbar style on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    document.querySelectorAll('.page-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.page-item').forEach(p => p.classList.remove('active'));
    link.parentElement.classList.add('active');
  });
});