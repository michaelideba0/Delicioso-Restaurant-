// Toggle Sidebar Menu
function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  menu.style.right = menu.style.right === '0px' ? '-250px' : '0px';
}

// Hero Slideshow
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName('slides');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000);
}
showSlides();

// Animate Menu Items and Reviews on Scroll
const menuItems = document.querySelectorAll('.menu-items .item');
const reviews = document.querySelectorAll('.review');

function animateOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  menuItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add('show');
    }
  });

  reviews.forEach(review => {
    const reviewTop = review.getBoundingClientRect().top;
    if (reviewTop < triggerBottom) {
      review.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);

// Add CSS for animation dynamically
const style = document.createElement('style');
style.innerHTML = `
.show { opacity: 1 !important; transform: translateY(0) !important; transition: all 0.6s ease; }
`;
document.head.appendChild(style);