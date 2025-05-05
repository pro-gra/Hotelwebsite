document.addEventListener('DOMContentLoaded', function() {
    // Console log to check if JS file is connected
    console.log('JavaScript file is connected and running');

    // Carousel functionality
    var nextBtn = document.querySelector('.next'),
        prevBtn = document.querySelector('.prev'),
        carousel = document.querySelector('.carousel'),
        list = document.querySelector('.list'),
        item = document.querySelectorAll('.item'),
        runningTime = document.querySelector('.carousel .timeRunning');

    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextBtn.onclick = function() {
        showSlider('next');
    };

    prevBtn.onclick = function() {
        showSlider('prev');
    };

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext);

    function resetTimeAnimation() {
        runningTime.style.animation = 'none';
        runningTime.offsetHeight; // trigger reflow
        runningTime.style.animation = null;
        runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    }

    function showSlider(type) {
        let sliderItemsDom = list.querySelectorAll('.carousel .list .item');
        if (type === 'next') {
            list.appendChild(sliderItemsDom[0]);
            carousel.classList.add('next');
        } else {
            list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
            carousel.classList.add('prev');
        }

        clearTimeout(runTimeOut);

        runTimeOut = setTimeout(() => {
            carousel.classList.remove('next');
            carousel.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextBtn.click();
        }, timeAutoNext);

        resetTimeAnimation(); // Reset the running time animation
    }

    // Start the initial animation
    resetTimeAnimation();

    // Mobile menu toggle


    const menuToggle = document.querySelector('.hamburger');
    const menu = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('mobile-menu');
    });
});



    


document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cardsFlex = document.querySelector('.cards-flex');
    const cardWidth = document.querySelector('.card').offsetWidth;
    const cardCount = document.querySelectorAll('.card').length;
    let currentIndex = 0;
    const visibleCards = 3; // Number of cards visible at once

    function updateSliderPosition() {
        const offset = -(cardWidth * visibleCards) * currentIndex;
        cardsFlex.style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < cardCount - visibleCards) {
            currentIndex++;
            updateSliderPosition();
        }
    });
});



 
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cards = document.querySelector('.cards');
    const cardWidth = document.querySelector('.card').offsetWidth;
    const visibleCards = 3; // Number of cards to show at once
    let currentIndex = 0;

    function updateSliderPosition() {
        const offset = -currentIndex * cardWidth;
        cards.style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextBtn.addEventListener('click', function() {
        const totalCards = document.querySelectorAll('.card').length;
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
            updateSliderPosition();
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    const section = document.getElementById('section1');
    

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section);
});



document.addEventListener('DOMContentLoaded', function() {
    const section = document.getElementById('section2');
    

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section);
});











document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper for Carousel
    var carouselSwiper = new Swiper('.carousel.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Initialize Swiper for Card Slider
    var cardSwiper = new Swiper('.slider-container.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});









  document.addEventListener('DOMContentLoaded', function() {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const galleryItems = document.querySelector('.gallery-items');
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    let currentIndex = 0;
    const itemWidth = galleryWrapper.clientWidth / 5; // Width of each item based on visible area (5 items visible at a time on large screens)

    nextButton.addEventListener('click', function() {
      if (currentIndex < galleryItems.children.length - 5) { // Prevent scrolling beyond the total number of items minus the number of visible items
        currentIndex++;
        galleryItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }
    });

    prevButton.addEventListener('click', function() {
      if (currentIndex > 0) { // Prevent scrolling beyond the start
        currentIndex--;
        galleryItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    // Slider functionality
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const track = document.querySelector('.image-track');
    const images = document.querySelectorAll('.gallery-image');
    const imageWidth = images[0].clientWidth;
    let index = 0;

    const updateSlider = () => {
        track.style.transform = `translateX(-${index * imageWidth}px)`;
    };

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % images.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        updateSlider();
    });

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxIndex = document.querySelector('.lightbox-index');
    const closeBtn = document.getElementById('close-btn');
    const prevLightbox = document.querySelector('.prev-lightbox');
    const nextLightbox = document.querySelector('.next-lightbox');
    const galleryImages = document.querySelectorAll('.gallery-image img');
    let currentIndex = 0;

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            showLightbox();
        });
    });

    const showLightbox = () => {
        lightbox.style.display = 'flex';
        updateLightbox();
    };

    const updateLightbox = () => {
        const src = galleryImages[currentIndex].src;
        lightboxImage.src = src;
        lightboxIndex.textContent = `${currentIndex + 1} of ${galleryImages.length}`;
    };

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    prevLightbox.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightbox();
    });

    nextLightbox.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                prevLightbox.click();
            } else if (e.key === 'ArrowRight') {
                nextLightbox.click();
            }
        }
    });

    // Touch gestures for navigation
    let touchStartX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    lightbox.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchDiff = touchStartX - touchEndX;

        if (Math.abs(touchDiff) > 30) { // Threshold for swipe
            if (touchDiff > 0) {
                nextLightbox.click(); // Swipe left
            } else {
                prevLightbox.click(); // Swipe right
            }
        }
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});



