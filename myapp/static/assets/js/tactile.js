document.addEventListener('DOMContentLoaded', function () {
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const cards = document.querySelector('.cards');
    let startX, currentX, isSwiping = false;
    const cardWidth = cards.querySelector('.card').offsetWidth;
    let currentIndex = 0;

    function updateSliderPosition() {
        const offset = -currentIndex * cardWidth;
        cards.style.transform = `translateX(${offset}px)`;
    }

    cardsWrapper.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });

    cardsWrapper.addEventListener('touchmove', function (e) {
        if (!isSwiping) return;
        currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        // Optionally show a visual feedback of the swipe (e.g., opacity)
        // cardsWrapper.style.opacity = Math.max(0.5, 1 - Math.abs(diffX) / cardWidth);
    });

    cardsWrapper.addEventListener('touchend', function (e) {
        if (!isSwiping) return;
        isSwiping = false;

        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        if (Math.abs(diffX) > cardWidth / 3) {
            if (diffX > 0 && currentIndex < cards.children.length - 1) {
                // Swipe left
                currentIndex++;
            } else if (diffX < 0 && currentIndex > 0) {
                // Swipe right
                currentIndex--;
            }
        }

        updateSliderPosition();
    });
});
