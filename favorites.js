// ==========================================
// Nova Digital - Favorites Page
// ==========================================

// ==========================================
// Header Menu Toggle
// ==========================================

function initHeaderMenu() {
  const headerActions = document.querySelector(".header-actions");
  const menuToggle = document.querySelector(".header-menu-toggle");

  if (!headerActions || !menuToggle) return;

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

initHeaderMenu();

// ==========================================
// Favorites Storage (shared with shop.js / home.js)
// ==========================================

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("novaFavorites")) || [];
  } catch {
    return [];
  }
}

function saveFavorites(favorites) {
  localStorage.setItem("novaFavorites", JSON.stringify(favorites));
}

function removeFavorite(index) {
  const favorites = getFavorites();
  favorites.splice(index, 1);
  saveFavorites(favorites);
  renderFavorites();
  showFavMessage("از علاقه‌مندی‌ها حذف شد");
}

// ==========================================
// Cart Storage (shared with shop.js / home.js / cart.js)
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
    existing.quantity = Number(existing.quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  updateCartCountBadge();
  showFavMessage("به سبد خرید اضافه شد");
}

function updateCartCountBadge() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = total;
  });
}

// ==========================================
// Format Price
// ==========================================

function formatPrice(price) {
  const num = Number(String(price).replace(/[^\d.-]/g, "")) || 0;
  return num.toLocaleString("en-US");
}

// ==========================================
// Render Favorites
// ==========================================

function renderFavorites() {
  const container = document.getElementById("favProducts");
  const favCount = document.getElementById("favCount");

  if (!container) return;

  const favorites = getFavorites();

  if (favCount) {
    favCount.textContent = `${favorites.length} محصول`;
  }

  if (favorites.length === 0) {
    container.innerHTML = `
      <div class="empty-fav">
        <svg class="icon"><use href="#icon-heart-outline"></use></svg>
        <h2>لیست علاقه‌مندی خالی است</h2>
        <p>محصولی که دوست داری رو با زدن قلب، اینجا نگه‌دار.</p>
        <a href="shop.html">مشاهده محصولات</a>
      </div>
    `;
    return;
  }

  container.innerHTML = favorites
    .map(
      (product, index) => `
    <div class="fav-card">
      <button
        type="button"
        class="fav-remove"
        onclick="removeFavorite(${index})"
        aria-label="حذف از علاقه‌مندی‌ها"
      >
        <svg class="icon"><use href="#icon-xmark"></use></svg>
      </button>

      <div class="fav-card-image">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="fav-card-info">
        <h3>${product.name}</h3>
        <p>${product.spec || ""}</p>
        <div class="fav-card-price">${formatPrice(product.price)} تومان</div>
      </div>

      <div class="fav-card-actions">
        <button
          type="button"
          class="fav-add-cart"
          onclick='addToCart(${JSON.stringify(product)})'
        >
          <svg class="icon"><use href="#icon-cart-plus"></use></svg>
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  `,
    )
    .join("");
}

// ==========================================
// Toast
// ==========================================

function showFavMessage(text) {
  let toast = document.querySelector(".fav-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "fav-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = text;
  toast.classList.add("show");

  clearTimeout(window.favToastTimer);
  window.favToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// ==========================================
// Init
// ==========================================

updateCartCountBadge();
renderFavorites();
