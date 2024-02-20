document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0; // Track the current slide

    // Function to update slides visibility
    function updateSlides(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Show the first slide initially
    updateSlides(currentIndex);

    // Function to go to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Cycle to the first slide if at the end
        updateSlides(currentIndex);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Cycle to the last slide if at the beginning
        updateSlides(currentIndex);
    }

    // Attach event listeners to buttons
    document.getElementById('right').addEventListener('click', nextSlide);
    document.getElementById('left').addEventListener('click', prevSlide);
});
