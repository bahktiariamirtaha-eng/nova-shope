// ======================================================
// NOVA DIGITAL - SHOP.JS
// ======================================================

// ======================================================
// PRODUCTS
// ======================================================


// ======================================================
// SETTINGS
// ======================================================

const productsPerLoad = 4;

const visibleProducts = {
  laptops: 4,
  mobiles: 4,
  monitors: 4,
  headphones: 4,
  accessories: 4,
};

// ======================================================
// FILTERS
// ======================================================

function parsePrice(price) {
  return Number(String(price).replace(/[^\d.-]/g, "")) || 0;
}

function getActiveFilters() {
  const categories = Array.from(
    document.querySelectorAll(".filter-category:checked"),
  ).map((el) => el.value);

  const brands = Array.from(
    document.querySelectorAll(".filter-brand:checked"),
  ).map((el) => el.value);

  const priceInput = document.getElementById("priceFilter");
  const maxPrice = priceInput ? Number(priceInput.value) : Infinity;

  return { categories, brands, maxPrice };
}

function productMatchesFilters(product, category, filters) {
  if (filters.categories.length && !filters.categories.includes(category)) {
    return false;
  }

  if (filters.brands.length && !filters.brands.includes(product.brand)) {
    return false;
  }

  if (parsePrice(product.price) > filters.maxPrice) {
    return false;
  }

  return true;
}

function applyFilters() {
  const filters = getActiveFilters();
  let anyVisible = false;

  Object.keys(products).forEach((category) => {
    const section = document
      .getElementById(category)
      ?.closest(".shop-section");

    const categoryAllowed =
      !filters.categories.length || filters.categories.includes(category);

    if (section) {
      section.style.display = categoryAllowed ? "" : "none";
    }

    if (!categoryAllowed) return;

    const filteredCount = products[category].filter((p) =>
      productMatchesFilters(p, category, filters),
    ).length;

    if (filteredCount > 0) anyVisible = true;

    renderCategory(category, filters);
    updateLoadMoreButton(category, filters);
  });

  const emptyState = document.getElementById("filterEmpty");
  if (emptyState) {
    emptyState.style.display = anyVisible ? "none" : "block";
  }
}

function initFilters() {
  const priceInput = document.getElementById("priceFilter");
  const priceValueLabel = document.getElementById("priceFilterValue");

  if (priceInput && priceValueLabel) {
    priceValueLabel.textContent = Number(priceInput.value).toLocaleString(
      "en-US",
    );

    priceInput.addEventListener("input", () => {
      priceValueLabel.textContent = Number(priceInput.value).toLocaleString(
        "en-US",
      );
      applyFilters();
    });
  }

  document
    .querySelectorAll(".filter-category, .filter-brand")
    .forEach((el) => el.addEventListener("change", applyFilters));

  const clearBtn = document.getElementById("clearFilters");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-category, .filter-brand")
        .forEach((el) => (el.checked = false));

      if (priceInput) {
        priceInput.value = priceInput.max;
        priceValueLabel.textContent = Number(priceInput.max).toLocaleString(
          "en-US",
        );
      }

      applyFilters();
    });
  }
}

// ======================================================
// CART
// ======================================================

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
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCart(cart);

  updateCartCount();

  showShopMessage("محصول به سبد خرید اضافه شد");
}

function updateCartCount() {
  const cart = getCart();

  const count = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0,
  );

  const counters = document.querySelectorAll("#cartCount, .cart-count");

  counters.forEach((counter) => {
    counter.textContent = count;
  });
}

// ======================================================
// FAVORITES
// ======================================================

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("novaFavorites")) || [];
  } catch {
    return [];
  }
}

function toggleFavorite(product) {
  const favorites = getFavorites();

  const index = favorites.findIndex((item) => item.name === product.name);

  if (index === -1) {
    favorites.push(product);

    showShopMessage("به علاقه‌مندی‌ها اضافه شد");
  } else {
    favorites.splice(index, 1);

    showShopMessage("از علاقه‌مندی‌ها حذف شد");
  }

  localStorage.setItem("novaFavorites", JSON.stringify(favorites));
}

// ======================================================
// MESSAGE
// ======================================================

function showShopMessage(text) {
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

  clearTimeout(window.shopMessageTimer);

  window.shopMessageTimer = setTimeout(() => {
    message.style.opacity = "0";
  }, 2000);
}

// ======================================================
// HEADER MENU
// ======================================================

function initHeaderMenu() {
  const headerActions = document.querySelector(".header-actions");

  const menuToggle = document.querySelector(".header-menu-toggle");

  if (!headerActions || !menuToggle) {
    return;
  }

  menuToggle.addEventListener("click", function (event) {
    event.preventDefault();

    event.stopPropagation();

    headerActions.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!headerActions.contains(event.target)) {
      headerActions.classList.remove("active");
    }
  });
}

// ======================================================
// MODAL
// ======================================================

let selectedProduct = null;

function initModal() {
  const modal = document.getElementById("productModal");

  if (!modal) return;

  const overlay = document.getElementById("modalOverlay");

  const close = document.getElementById("modalClose");

  const image = document.getElementById("modalProductImage");

  const name = document.getElementById("modalProductName");

  const spec = document.getElementById("modalProductSpec");

  const price = document.getElementById("modalProductPrice");

  const badge = document.getElementById("modalProductBadge");

  const addButton = document.getElementById("modalAddToCart");

  const favoriteButton = document.getElementById("modalFavorite");

  // --------------------------------------------------
  // اصلاح خودکار ساختار modal
  // --------------------------------------------------

  const modalContent = modal.querySelector(".modal-content");

  if (modalContent) {
    const modalElements = [
      close,
      image ? image.closest(".modal-image") : null,
      name ? name.closest(".modal-info") : null,
    ];

    modalElements.forEach((element) => {
      if (element && !modalContent.contains(element)) {
        modalContent.appendChild(element);
      }
    });
  }

  // --------------------------------------------------
  // OPEN
  // --------------------------------------------------

  window.openProductModal = function (product) {
    selectedProduct = product;

    if (image) {
      image.src = product.image;

      image.alt = product.name;
    }

    if (name) {
      name.textContent = product.name;
    }

    if (spec) {
      spec.textContent = product.spec;
    }

    if (price) {
      price.textContent = `${product.price} تومان`;
    }

    if (badge) {
      badge.textContent = `تخفیف ${product.badge}`;
    }

    updateModalFavorite(favoriteButton);

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
  };

  // --------------------------------------------------
  // CLOSE
  // --------------------------------------------------

  function closeModal() {
    modal.classList.remove("active");

    document.body.style.overflow = "";

    selectedProduct = null;
  }

  if (close) {
    close.addEventListener("click", closeModal);
  }

  if (overlay) {
    overlay.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // --------------------------------------------------
  // ADD TO CART
  // --------------------------------------------------

  if (addButton) {
    addButton.addEventListener("click", function () {
      if (!selectedProduct) return;

      addToCart(selectedProduct);
    });
  }

  // --------------------------------------------------
  // FAVORITE
  // --------------------------------------------------

  if (favoriteButton) {
    favoriteButton.addEventListener("click", function () {
      if (!selectedProduct) return;

      toggleFavorite(selectedProduct);

      updateModalFavorite(favoriteButton);
    });
  }
}

// ======================================================
// MODAL FAVORITE ICON
// ======================================================

function updateModalFavorite(button) {
  if (!button || !selectedProduct) {
    return;
  }

  const favorites = getFavorites();

  const liked = favorites.some((item) => item.name === selectedProduct.name);

  if (liked) {
    button.innerHTML = '<i class="fa-solid fa-heart"></i>';

    button.classList.add("liked");
  } else {
    button.innerHTML = '<i class="fa-regular fa-heart"></i>';

    button.classList.remove("liked");
  }
}

// ======================================================
// PRODUCT CARD
// ======================================================

function createProductCard(product) {
  return `

    <div class="product-card">

      <div class="badge">
        -${product.badge}
      </div>


      <i
        class="fa-regular fa-heart favorite"
        data-product="${product.name}"
      ></i>


      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

      </div>


      <div class="product-info">

        <h3>
          ${product.name}
        </h3>


        <span>
          ${product.spec}
        </span>


        <div class="price">
          ${product.price} تومان
        </div>


        <a
          href="product.html"
          class="product-details-link"
          data-product="${product.name}"
        >
          مشاهده محصول

          <i class="fa-solid fa-arrow-left"></i>
        </a>

      </div>

    </div>

  `;
}

// ======================================================
// RENDER CATEGORY
// ======================================================

function renderCategory(category, filters) {
  const container = document.getElementById(category);

  if (!container) return;

  const categoryProducts = products[category];

  if (!categoryProducts) return;

  const activeFilters = filters || getActiveFilters();

  const filteredProducts = categoryProducts.filter((p) =>
    productMatchesFilters(p, category, activeFilters),
  );

  const visibleCount = Math.min(
    visibleProducts[category] || productsPerLoad,
    filteredProducts.length,
  );

  const visibleItems = filteredProducts.slice(0, visibleCount);

  container.innerHTML = visibleItems.length
    ? visibleItems.map(createProductCard).join("")
    : `<p class="no-results">محصولی با این فیلترها در این دسته پیدا نشد</p>`;

  // ------------------------------------------
  // Product Details / Modal
  // ------------------------------------------

  container.querySelectorAll(".product-details-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      event.stopPropagation();

      const product = categoryProducts.find(
        (item) => item.name === this.dataset.product,
      );

      if (product && typeof window.openProductModal === "function") {
        window.openProductModal(product);
      }
    });
  });

  // ------------------------------------------
  // Favorite
  // ------------------------------------------

  container.querySelectorAll(".favorite").forEach((heart) => {
    heart.addEventListener("click", function (event) {
      event.preventDefault();

      event.stopPropagation();

      const product = categoryProducts.find(
        (item) => item.name === this.dataset.product,
      );

      if (product) {
        toggleFavorite(product);
      }
    });
  });
}

// ======================================================
// LOAD MORE BUTTON
// ======================================================

function updateLoadMoreButton(category, filters) {
  const button = document.querySelector(
    `.load-more-btn[data-category="${category}"]`,
  );

  if (!button) return;

  const activeFilters = filters || getActiveFilters();

  const total = products[category].filter((p) =>
    productMatchesFilters(p, category, activeFilters),
  ).length;

  const visible = Math.min(visibleProducts[category], total);

  if (total === 0) {
    button.style.display = "none";
    return;
  }

  button.style.display = "";

  if (visible >= total) {
    button.disabled = true;

    button.classList.add("disabled");

    button.innerHTML = `
      همه محصولات نمایش داده شد
      <i class="fa-solid fa-check"></i>
    `;
  } else {
    button.disabled = false;

    button.classList.remove("disabled");

    button.innerHTML = `
      نمایش بیشتر
      <i class="fa-solid fa-chevron-down"></i>
    `;
  }
}

// ======================================================
// LOAD MORE
// ======================================================

function loadMore(category) {
  if (!products[category]) {
    return;
  }

  visibleProducts[category] += productsPerLoad;

  if (visibleProducts[category] > products[category].length) {
    visibleProducts[category] = products[category].length;
  }

  const filters = getActiveFilters();

  renderCategory(category, filters);

  updateLoadMoreButton(category, filters);
}

// ======================================================
// INITIALIZE SHOP
// ======================================================

document.addEventListener("DOMContentLoaded", function () {
  // محصولات
  Object.keys(products).forEach((category) => {
    renderCategory(category);

    updateLoadMoreButton(category);
  });

  // دکمه‌های نمایش بیشتر
  document.addEventListener("click", function (event) {
    const button = event.target.closest(".load-more-btn");

    if (!button) return;

    const category = button.dataset.category;

    if (!category) return;

    loadMore(category);
  });

  // هدر
  initHeaderMenu();

  // فیلترها
  initFilters();

  // Modal
  initModal();

  // سبد
  updateCartCount();
});
