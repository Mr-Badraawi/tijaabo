document.addEventListener('DOMContentLoaded', () => {
  // Get all elements
  const menuItems = document.querySelectorAll('.menu-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  // Open lightbox when an image is clicked
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const largeImageUrl = item.getAttribute('data-large');
      if (largeImageUrl) {
        lightboxImg.src = largeImageUrl;
        lightbox.style.display = 'flex';
      } else {
        console.error('No large image URL found for this item.');
      }
    });
  });

  // Close lightbox when the close button is clicked
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});