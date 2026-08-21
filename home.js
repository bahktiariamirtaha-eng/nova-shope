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
let savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

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
      savedFavorites = savedFavorites.filter((item) => item !== index);
    }

    localStorage.setItem("favorites", JSON.stringify(savedFavorites));
  });
});

// ==========================================
// CART / FAVORITES (shared with shop.js — same keys)
// ==========================================

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("novaCart")) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("novaCart", JSON.stringify(cart));
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find((item) => item.name === product.name);

  if (existing) {
    existing.quantity = Number(existing.quantity || 0) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  showHomeMessage("محصول به سبد خرید اضافه شد");
}

function getProductFavorites() {
  try {
    return JSON.parse(localStorage.getItem("novaFavorites")) || [];
  } catch {
    return [];
  }
}

function toggleProductFavorite(product) {
  const favs = getProductFavorites();
  const index = favs.findIndex((item) => item.name === product.name);

  if (index === -1) {
    favs.push(product);
    showHomeMessage("به علاقه‌مندی‌ها اضافه شد");
  } else {
    favs.splice(index, 1);
    showHomeMessage("از علاقه‌مندی‌ها حذف شد");
  }

  localStorage.setItem("novaFavorites", JSON.stringify(favs));
}

function showHomeMessage(text) {
  let message = document.getElementById("shopMessage");

  if (!message) {
    message = document.createElement("div");
    message.id = "shopMessage";

    Object.assign(message.style, {
      position: "fixed",
      bottom: "25px",
      left: "25px",
      zIndex: "99999",
      padding: "12px 18px",
      borderRadius: "12px",
      background: "#151d2e",
      color: "#fff",
      fontSize: "14px",
      opacity: "0",
      transition: "opacity .25s ease",
    });

    document.body.appendChild(message);
  }

  message.textContent = text;
  message.style.opacity = "1";

  clearTimeout(window.homeMessageTimer);
  window.homeMessageTimer = setTimeout(() => {
    message.style.opacity = "0";
  }, 2000);
}

// ==========================================
// HOME SLIDER → PRODUCT MODAL
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("productModal");

  if (!modal) {
    console.warn("productModal در صفحه اصلی پیدا نشد.");
    return;
  }

  let selectedProduct = null;

  const modalImage = document.getElementById("modalProductImage");
  const modalName = document.getElementById("modalProductName");
  const modalSpec = document.getElementById("modalProductSpec");
  const modalPrice = document.getElementById("modalProductPrice");
  const modalBadge = document.getElementById("modalProductBadge");

  // ==========================================
  // OPEN MODAL (shared by swiper cards + search)
  // ==========================================

  function openProductModal(product) {
    if (modalImage) {
      modalImage.src = product.image;
      modalImage.alt = product.name;
    }

    if (modalName) {
      modalName.textContent = product.name;
    }

    if (modalSpec) {
      modalSpec.textContent = product.spec;
    }

    if (modalPrice) {
      const price = String(product.price).replace("تومان", "").trim();
      modalPrice.textContent = price + " تومان";
    }

    if (modalBadge) {
      modalBadge.textContent = "تخفیف " + product.badge;
    }

    selectedProduct = product;
    updateModalFavoriteIcon();

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  window.openProductModal = openProductModal;

  const cards = document.querySelectorAll(".myProducts .product-card");

  cards.forEach(function (card) {
    const link = card.querySelector(".product-info a");

    if (!link) return;

    link.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      openProductModal({
        name: card.querySelector(".product-info h3")?.textContent.trim() || "",
        spec: card.querySelector(".product-info p")?.textContent.trim() || "",
        price:
          card
            .querySelector(".price")
            ?.textContent.replace("تومان", "")
            .trim() || "",
        image:
          card.querySelector(".product-image img")?.getAttribute("src") || "",
        badge: card.querySelector(".badge")?.textContent.trim() || "تخفیف",
      });
    });
  });

  // ==========================================
  // ADD TO CART / FAVORITE (inside modal)
  // ==========================================

  const modalAddToCartBtn = document.getElementById("modalAddToCart");
  const modalFavoriteBtn = document.getElementById("modalFavorite");

  function updateModalFavoriteIcon() {
    if (!modalFavoriteBtn || !selectedProduct) return;

    const liked = getProductFavorites().some(
      (item) => item.name === selectedProduct.name,
    );

    modalFavoriteBtn.innerHTML = liked
      ? '<i class="fa-solid fa-heart"></i>'
      : '<i class="fa-regular fa-heart"></i>';

    modalFavoriteBtn.classList.toggle("liked", liked);
  }

  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener("click", function () {
      if (!selectedProduct) return;
      addToCart(selectedProduct);
    });
  }

  if (modalFavoriteBtn) {
    modalFavoriteBtn.addEventListener("click", function () {
      if (!selectedProduct) return;
      toggleProductFavorite(selectedProduct);
      updateModalFavoriteIcon();
    });
  }

  // ==========================================
  // CLOSE MODAL
  // ==========================================

  const closeButton = document.getElementById("modalClose");

  const overlay = document.getElementById("modalOverlay");

  function closeProductModal() {
    modal.classList.remove("active");

    document.body.style.overflow = "";
  }

  if (closeButton) {
    closeButton.addEventListener("click", closeProductModal);
  }

  if (overlay) {
    overlay.addEventListener("click", closeProductModal);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeProductModal();
    }
  });

  // ==========================================
  // SEARCH
  // ==========================================

  const searchOverlay = document.getElementById("searchOverlay");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const closeSearchBtn = document.getElementById("closeSearch");

  function flattenProducts() {
    if (typeof products === "undefined") return [];

    return Object.keys(products).reduce((all, category) => {
      return all.concat(products[category].map((p) => ({ ...p, category })));
    }, []);
  }

  const allProducts = flattenProducts();

  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    setTimeout(() => searchInput?.focus(), 100);
  }

  function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".search-trigger").forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      openSearch();
    });
  });

  if (closeSearchBtn) {
    closeSearchBtn.addEventListener("click", closeSearch);
  }

  if (searchOverlay) {
    searchOverlay.addEventListener("click", function (event) {
      if (event.target === searchOverlay) closeSearch();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && searchOverlay?.classList.contains("active")) {
      closeSearch();
    }
  });

  function renderSearchResults(query) {
    if (!searchResults) return;

    const q = query.trim().toLowerCase();

    if (!q) {
      searchResults.innerHTML =
        '<p class="search-hint">برای جستجو شروع به تایپ کنید</p>';
      return;
    }

    const matches = allProducts
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.spec && p.spec.toLowerCase().includes(q)) ||
          (p.brand && p.brand.toLowerCase().includes(q)),
      )
      .slice(0, 8);

    if (matches.length === 0) {
      searchResults.innerHTML =
        '<p class="search-empty">محصولی با این عنوان پیدا نشد</p>';
      return;
    }

    searchResults.innerHTML = matches
      .map(
        (p, i) => `
      <div class="search-result-item" data-index="${i}">
        <img src="${p.image}" alt="${p.name}">
        <div class="search-result-info">
          <h4>${p.name}</h4>
          <span>${p.spec || ""}</span>
        </div>
        <div class="search-result-price">${formatPriceDisplay(p.price)} تومان</div>
      </div>
    `,
      )
      .join("");

    searchResults.querySelectorAll(".search-result-item").forEach((el) => {
      el.addEventListener("click", function () {
        const product = matches[Number(this.dataset.index)];
        closeSearch();
        openProductModal(product);
      });
    });
  }

  function formatPriceDisplay(price) {
    const num = Number(String(price).replace(/[^\d.-]/g, "")) || 0;
    return num.toLocaleString("en-US");
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      renderSearchResults(this.value);
    });
  }
});
