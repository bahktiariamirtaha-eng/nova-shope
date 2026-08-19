// ======================================================
// NOVA DIGITAL - SHOP.JS
// ======================================================

// ======================================================
// PRODUCTS
// ======================================================

const products = {
  laptops: [
    {
      name: "ASUS TUF F15",
      spec: "Core i7 • RTX4060",
      price: "72,900,000",
      image: "shopeimage/laptop/image-laptop-1.png",
      badge: "15%",
    },
    {
      name: "Lenovo Legion 5",
      spec: "Ryzen 7 • RTX4060",
      price: "69,500,000",
      image: "shopeimage/laptop/image-laptop-2.png",
      badge: "12%",
    },
    {
      name: "MSI Katana",
      spec: "Core i7 • RTX4050",
      price: "67,800,000",
      image: "shopeimage/laptop/image-laptop-3.png",
      badge: "10%",
    },
    {
      name: "HP Victus",
      spec: "Ryzen 5 • RTX3050",
      price: "55,900,000",
      image: "shopeimage/laptop/image-laptop-4.png",
      badge: "8%",
    },
    {
      name: "MacBook Air M3",
      spec: "Apple M3 • 16GB",
      price: "95,000,000",
      image: "shopeimage/laptop/image-laptop-5.png",
      badge: "5%",
    },
  ],

  mobiles: [
    {
      name: "Galaxy S25 Ultra",
      spec: "512GB",
      price: "64,900,000",
      image: "shopeimage/phone/SOPHE-PHONE1.png",
      badge: "10%",
    },
    {
      name: "iPhone 16 Pro",
      spec: "256GB",
      price: "98,000,000",
      image: "shopeimage/phone/SHOPE-PHONE2.png",
      badge: "5%",
    },
    {
      name: "Xiaomi 15",
      spec: "512GB",
      price: "41,000,000",
      image: "shopeimage/phone/SHOPE-PHNE3.png",
      badge: "15%",
    },
    {
      name: "Nothing Phone 3",
      spec: "256GB",
      price: "37,500,000",
      image: "shopeimage/phone/SHOPE-PHNE5.png",
      badge: "7%",
    },
    {
      name: "Pixel 10 Pro",
      spec: "256GB",
      price: "58,000,000",
      image: "shopeimage/phone/SHOPE-PHNE4.png",
      badge: "11%",
    },
    {
      name: "realme GT7",
      spec: "256GB",
      price: "58,000,000",
      image: "shopeimage/phone/SHOPE-PHNE8.png",
      badge: "11%",
    },
    {
      name: "OnePlus 13",
      spec: "256GB",
      price: "58,000,000",
      image: "shopeimage/phone/SHOPE-PHNE6.png",
      badge: "11%",
    },
    {
      name: "POCO F6 Pro",
      spec: "256GB",
      price: "58,000,000",
      image: "shopeimage/phone/SHOPE-PHNE7.png",
      badge: "11%",
    },
    {
      name: "iPhone SE (2022)",
      spec: "256GB",
      price: "58,000,000",
      image: "shopeimage/phone/SHOPE-PHNE10.png",
      badge: "11%",
    },
    {
      name: "Galaxy A56 5G",
      spec: "256GB",
      price: "58,000,000",
      image: "shopeimage/phone/SHOPE-PHNE9.png",
      badge: "11%",
    },
  ],

  monitors: [
    {
      name: "LG UltraWide",
      spec: "34 Inch",
      price: "38,000,000",
      image: "image/monitor1.png",
      badge: "12%",
    },
    {
      name: "ASUS ProArt",
      spec: "32 Inch",
      price: "42,000,000",
      image: "image/monitor2.png",
      badge: "8%",
    },
    {
      name: "Samsung Odyssey",
      spec: "27 Inch",
      price: "31,000,000",
      image: "image/monitor3.png",
      badge: "18%",
    },
    {
      name: "MSI Gaming",
      spec: "165Hz",
      price: "26,000,000",
      image: "image/monitor4.png",
      badge: "10%",
    },
    {
      name: "BenQ Designer",
      spec: "4K",
      price: "36,000,000",
      image: "image/monitor5.png",
      badge: "9%",
    },
  ],

  headphones: [
    {
      name: "Sony XM5",
      spec: "Wireless",
      price: "16,900,000",
      image: "image/headphone1.png",
      badge: "12%",
    },
    {
      name: "AirPods Pro 2",
      spec: "USB-C",
      price: "18,500,000",
      image: "image/headphone2.png",
      badge: "6%",
    },
    {
      name: "Galaxy Buds 3",
      spec: "ANC",
      price: "9,200,000",
      image: "image/headphone3.png",
      badge: "15%",
    },
    {
      name: "JBL Tune",
      spec: "Bluetooth",
      price: "4,900,000",
      image: "image/headphone4.png",
      badge: "20%",
    },
    {
      name: "Razer BlackShark",
      spec: "Gaming",
      price: "7,500,000",
      image: "image/headphone5.png",
      badge: "10%",
    },
  ],

  accessories: [
    {
      name: "Mechanical Keyboard",
      spec: "RGB",
      price: "4,200,000",
      image: "image/acc1.png",
      badge: "18%",
    },
    {
      name: "Gaming Mouse",
      spec: "Wireless",
      price: "3,100,000",
      image: "image/acc2.png",
      badge: "10%",
    },
    {
      name: "USB Hub",
      spec: "Type-C",
      price: "1,400,000",
      image: "image/acc3.png",
      badge: "15%",
    },
    {
      name: "Laptop Stand",
      spec: "Aluminium",
      price: "1,800,000",
      image: "image/acc4.png",
      badge: "8%",
    },
    {
      name: "SSD 1TB",
      spec: "NVMe",
      price: "5,700,000",
      image: "image/acc5.png",
      badge: "12%",
    },
  ],
};

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

function renderCategory(category) {
  const container = document.getElementById(category);

  if (!container) return;

  const categoryProducts = products[category];

  if (!categoryProducts) return;

  const visibleCount = visibleProducts[category] || productsPerLoad;

  const visibleItems = categoryProducts.slice(0, visibleCount);

  container.innerHTML = visibleItems.map(createProductCard).join("");

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

function updateLoadMoreButton(category) {
  const button = document.querySelector(
    `.load-more-btn[data-category="${category}"]`,
  );

  if (!button) return;

  const total = products[category].length;

  const visible = visibleProducts[category];

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

  renderCategory(category);

  updateLoadMoreButton(category);
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

  // Modal
  initModal();

  // سبد
  updateCartCount();
});
