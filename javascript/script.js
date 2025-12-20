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

const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideInterval;

    // Function to actually change the DOM
    function showSlide(index) {
        // Hide all
        slides.forEach(slide => slide.classList.remove('active'));
        // Show target
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        resetTimer();
    }

    function prevSlide() {
        // If current is 0, wrap around to last index, otherwise subtract 1
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
        resetTimer();
    }

    // Function to reset the auto-player so it doesn't jump immediately after a click
    function resetTimer() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    }

    // Initialize auto-play
    slideInterval = setInterval(nextSlide, 3000);