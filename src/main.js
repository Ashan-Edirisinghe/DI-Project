document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const toggleButton = document.getElementById("toggle-button");
  const dropdownMenu = document.getElementById("dropdown-menu");
  if (toggleButton && dropdownMenu) {
    toggleButton.addEventListener("click", () => {
      dropdownMenu.classList.toggle("hidden");
    });
  }

  // Services dropdown
  const dropdownLink1 = document.getElementById("dropdownNavbarLink1");
  const dropdownContent1 = document.getElementById("dropdownNavbar1");
  if (dropdownLink1 && dropdownContent1) {
    dropdownLink1.addEventListener("click", () => {
      dropdownContent1.classList.toggle("hidden");
    });
  }

  // Work dropdown
  const dropdownLink2 = document.getElementById("dropdownNavbarLink2");
  const dropdownContent2 = document.getElementById("dropdownNavbar2");
  if (dropdownLink2 && dropdownContent2) {
    dropdownLink2.addEventListener("click", () => {
      dropdownContent2.classList.toggle("hidden");
    });
  }

  // Swiper init
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Modal logic
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeModal = document.getElementById("closeModal");
  const teamMembers = document.querySelectorAll(".team-member");

  const teamInfo = {
    "John Doe": "John is the CEO...",
    "Jane Smith": "Jane is our Event Manager...",
    "David Johnson": "David is the Creative Director...",
  };

  teamMembers.forEach((member) => {
    member.addEventListener("click", function () {
      const memberName = this.getAttribute("data-member");
      if (modal && modalTitle && modalDescription) {
        modalTitle.textContent = memberName;
        modalDescription.textContent = teamInfo[memberName];
        modal.classList.remove("hidden");
      }
    });
  });

  if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  }

  // Carousel logic
  const carousel = document.getElementById("carousel");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const ratingStars = document.querySelectorAll(".star");
  const ratingInput = document.getElementById("rating");

  if (carousel && nextBtn && prevBtn) {
    const totalItems = carousel.children.length;
    let currentIndex = 0;

    function getItemWidth() {
      return carousel.querySelector(".carousel-item").offsetWidth;
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

    nextBtn.addEventListener("click", () => {
      clearInterval(autoSlide);
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
      autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
      }, 5000);
    });

    prevBtn.addEventListener("click", () => {
      clearInterval(autoSlide);
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
      autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
      }, 5000);
    });

    window.addEventListener("resize", updateCarousel);
    updateCarousel();
  }

  // Rating stars logic
  if (ratingStars.length > 0 && ratingInput) {
    ratingStars.forEach((star) => {
      star.addEventListener("click", () => {
        const ratingValue = star.dataset.value;
        ratingInput.value = ratingValue;
        ratingStars.forEach((s, index) => {
          s.classList.toggle("text-yellow-500", index < ratingValue);
          s.classList.toggle("text-gray-300", index >= ratingValue);
        });
      });
    });
  }
});
