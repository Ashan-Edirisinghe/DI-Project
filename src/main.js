 // Toggle dropdown menu visibility for mobile
 const toggleButton = document.getElementById('toggle-button');
 const dropdownMenu = document.getElementById('dropdown-menu');

 toggleButton.addEventListener('click', () => {
   dropdownMenu.classList.toggle('hidden');
 });

 // Toggle services dropdown
 const dropdownLink1 = document.getElementById('dropdownNavbarLink1');
 const dropdownContent1 = document.getElementById('dropdownNavbar1');

 dropdownLink1.addEventListener('click', () => {
   dropdownContent1.classList.toggle('hidden');
 });

 // Toggle work dropdown
 const dropdownLink2 = document.getElementById('dropdownNavbarLink2');
 const dropdownContent2 = document.getElementById('dropdownNavbar2');

 dropdownLink2.addEventListener('click', () => {
   dropdownContent2.classList.toggle('hidden');
 });
 
 document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
      loop: true, // Enable looping of slides
      autoplay: {
          delay: 2500, // Delay between transitions in milliseconds
          disableOnInteraction: false, // Allow autoplay to continue even after interaction
      },
      pagination: {
          el: '.swiper-pagination', // Pagination element
          clickable: true, // Allow clicking on pagination bullets
      },
      navigation: {
          nextEl: '.swiper-button-next', // Next button
          prevEl: '.swiper-button-prev', // Previous button
      },
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeModal = document.getElementById('closeModal');
  const teamMembers = document.querySelectorAll('.team-member');

  // Team Member Information
  const teamInfo = {
    'John Doe': 'John is the CEO & Founder of Momentum Event Works. He has over 20 years of experience in event management and leads our company with vision and dedication.',
    'Jane Smith': 'Jane is our Event Manager, bringing 10 years of expertise in planning and executing corporate and social events. She ensures everything runs smoothly.',
    'David Johnson': 'David is the Creative Director at Momentum Event Works. He has a strong artistic background and brings creativity to every project.'
  };

  // Function to open modal with team member info
  teamMembers.forEach(member => {
    member.addEventListener('click', function() {
      const memberName = this.getAttribute('data-member');
      modalTitle.textContent = memberName;
      modalDescription.textContent = teamInfo[memberName];
      modal.classList.remove('hidden');  // Show the modal
    });
  });

  // Function to close the modal
  closeModal.addEventListener('click', function() {
    modal.classList.add('hidden');  // Hide the modal
  });

  // Close modal when clicking outside the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
});

const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const totalItems = carousel.children.length;
let currentIndex = 0;

const ratingStars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rating');

ratingStars.forEach(star => {
    star.addEventListener('click', () => {
        const ratingValue = star.dataset.value;
        ratingInput.value = ratingValue;

        ratingStars.forEach((s, index) => {
            s.classList.toggle('text-yellow-500', index < ratingValue);
            s.classList.toggle('text-gray-300', index >= ratingValue);
        });
    });
});

function getItemWidth() {
    return carousel.querySelector('.carousel-item').offsetWidth;
}

function updateCarousel() {
    const itemWidth = getItemWidth();
    const offset = currentIndex * -itemWidth; 
    carousel.style.transform = `translateX(${offset}px)`;
}

let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}, 5000);

nextBtn.addEventListener('click', () => {
    clearInterval(autoSlide); 
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }, 5000);
});

prevBtn.addEventListener('click', () => {
    clearInterval(autoSlide); 
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }, 5000);
});

window.addEventListener('resize', updateCarousel);
updateCarousel();
