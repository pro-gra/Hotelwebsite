document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            openLightbox(item.src);
        });
    });

    function openLightbox(src) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close">&times;</span>
                <img src="${src}" alt="Lightbox Image">
            </div>
        `;
        document.body.appendChild(lightbox);

        const closeBtn = lightbox.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                document.body.removeChild(lightbox);
            }
        });
    }
});
