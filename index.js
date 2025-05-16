document.addEventListener('DOMContentLoaded', () => {
  const imageGallery = document.getElementById('imageGallery');
  const modalImage = document.getElementById('modalImage');
  const imageViewerModalElement = document.getElementById('imageViewerModal');
  const imageViewerModal = imageViewerModalElement ? new bootstrap.Modal(imageViewerModalElement) : null;
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  // IMPORTANT: Add your image paths here relative to the HTML file
  // For example: let images = ['img/image1.jpg', 'img/photo2.png', 'img/animation.gif'];
  let images = [
    'img/454270476_1034148404744429_3276657939339336870_n.jpg',
    'img/4D5CBBAA-624C-460D-B8A0-589BFC3C3787.jpg',
    'img/8B2A7522.JPG',
    'img/8B2A8856.JPG',
    'img/media_20240903_154642_2920115454841718783.jpg',
    'img/media_20240903_154642_4080684745815290745.jpg',
    'img/media_20240903_154642_6134122389741576655.jpg',
    'img/media_20240903_154642_8548799659848934276.jpg',
    'img/NEDCON_-_Rensa_17.jpg',
    'img/steve-johnson-_0iV9LmPDn0-unsplash.jpg',
    'img/Team.png'
  ];

  let currentIndex = 0;

  function updateModalImage() {
    if (!modalImage || images.length === 0) return;
    modalImage.src = images[currentIndex];
    if (prevButton) prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
    if (nextButton) nextButton.style.display = currentIndex < images.length - 1 ? 'block' : 'none';
  }

  function showImage(index) {
    if (images.length === 0 || !imageViewerModal) return;
    currentIndex = index;
    updateModalImage();
    imageViewerModal.show();
  }

  if (imageGallery) {
    if (images.length === 0) {
      imageGallery.innerHTML = '<p class="col-12 text-center">No images found. Add image paths to the `images` array in `index.js` and place the image files in the `img` folder.</p>';
    } else {
      imageGallery.innerHTML = ''; // Clear any previous message
      images.forEach((src, index) => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${index + 1}`;
        img.className = 'img-fluid gallery-img';
        img.addEventListener('click', () => showImage(index));
        col.appendChild(img);
        imageGallery.appendChild(col);
      });
    }
  }

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateModalImage();
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        updateModalImage();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (imageViewerModalElement && imageViewerModalElement.classList.contains('show')) { // Check if modal is open
      if (e.key === 'ArrowLeft') {
        if (prevButton && prevButton.style.display !== 'none') {
            prevButton.click();
        }
      } else if (e.key === 'ArrowRight') {
         if (nextButton && nextButton.style.display !== 'none') {
            nextButton.click();
        }
      }
    }
  });
});
