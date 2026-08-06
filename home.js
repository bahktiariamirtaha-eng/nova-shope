const swiper = new Swiper(".myProducts", {
  slidesPerView: 4,

  spaceBetween: 30,

  loop: true,

  grabCursor: true,

  speed: 800,

  autoplay: {
    delay: 2500,

    disableOnInteraction: false,
  },

  breakpoints: {
    0: { slidesPerView: 1.2 },

    768: { slidesPerView: 2 },

    992: { slidesPerView: 3 },

    1200: { slidesPerView: 4 },
  },
});
// START MODAL VIDEOS
const videoCards = document.querySelectorAll(".video-card");

const modal = document.querySelector(".video-modal");
const modalVideo = document.querySelector(".modal-video");
const closeModal = document.querySelector(".close-modal");

videoCards.forEach((card) => {
  card.addEventListener("click", () => {
    const videoSrc = card.querySelector("video source").src;

    modalVideo.src = videoSrc;

    modal.style.display = "flex";

    modalVideo.load();

    modalVideo.play();
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";

  modalVideo.pause();

  modalVideo.src = "";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";

    modalVideo.pause();

    modalVideo.src = "";
  }
});
// end modal video

// start reviews
const reviewSwiper = new Swiper(".reviewSwiper", {
  slidesPerView: 3,

  spaceBetween: 25,

  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },

    768: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});

// ==========================
// Favorite System
// ==========================

// تمام آیکون‌های قلب را پیدا می‌کند
const favorites = document.querySelectorAll(".favorite");

// علاقه‌مندی‌های ذخیره شده
let savedFavorites =
  JSON.parse(localStorage.getItem("favorites")) || [];

// بررسی می‌کند قبلاً ذخیره شده یا نه
favorites.forEach((heart, index) => {

  if (savedFavorites.includes(index)) {

    heart.classList.remove("fa-regular");

    heart.classList.add("fa-solid");

  }

  // کلیک روی قلب
  heart.addEventListener("click", () => {

    heart.classList.toggle("fa-solid");

    heart.classList.toggle("fa-regular");

    if (heart.classList.contains("fa-solid")) {

      savedFavorites.push(index);

    } else {

      savedFavorites = savedFavorites.filter(item => item !== index);

    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(savedFavorites)
    );

  });

});
