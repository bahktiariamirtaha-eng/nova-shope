// ======================================================
// Nova Digital - Shop Products
// ======================================================

// ======================================================
// Products Database
// ======================================================

const products = {
  // ===============================
  // Laptops
  // ===============================

  laptops: [
    {
      name: "ASUS TUF F15",
      spec: "Core i7 • RTX4060",
      price: "72,900,000",
      image: "shopeimage/laptop/image-laptop-1.png",
      badge: "15%",
      loading: "lazy",
    },

    {
      name: "Lenovo Legion 5",
      spec: "Ryzen 7 • RTX4060",
      price: "69,500,000",
      image: "shopeimage/laptop/image-laptop-2.png",
      badge: "12%",
      loading: "lazy",
    },

    {
      name: "MSI Katana",
      spec: "Core i7 • RTX4050",
      price: "67,800,000",
      image: "shopeimage/laptop/image-laptop-3.png",
      badge: "10%",
      loading: "lazy",
    },

    {
      name: "HP Victus",
      spec: "Ryzen 5 • RTX3050",
      price: "55,900,000",
      image: "shopeimage/laptop/image-laptop-4.png",
      badge: "8%",
      loading: "lazy",
    },

    {
      name: "MacBook Air M3",
      spec: "Apple M3 • 16GB",
      price: "95,000,000",
      image: "shopeimage/laptop/image-laptop-5.png",
      badge: "5%",
      loading: "lazy",
    },
  ],

  // ===============================
  // Mobiles
  // ===============================

  mobiles: [
    {
      name: "Galaxy S25 Ultra",
      spec: "512GB",
      price: "64,900,000",
      image: "shopeimage/phone/SOPHE-PHONE1.png",
      badge: "10%",
      loading: "lazy",
    },

    {
      name: "iPhone 16 Pro",
      spec: "256GB",
      price: "98,000,000",
      image: "shopeimage/phone/SHOPE-PHONE2.png",
      badge: "5%",
      loading: "lazy",
    },

    {
      name: "Xiaomi 15",
      spec: "512GB",
      price: "41,000,000",
      image: "shopeimage/phone/SHOPE-PHNE3.png",
      badge: "15%",
      loading: "lazy",
    },

    {
      name: "Nothing Phone 3",
      spec: "256GB",
      price: "37,500,000",
      image: "shopeimage/phone/SHOPE-PHNE5.png",
      badge: "7%",
      loading: "lazy",
    },

    {
      name: "Pixel 10 Pro",
      spec: "256GB",
      price: "58,000,000",
      image: "shopeimage/phone/SHOPE-PHNE4.png",
      badge: "11%",
      loading: "lazy",
    },

    {
      name: "realme GT7",
      spec: "256GB",
      price: "58,000,000",
      image: "shopeimage/phone/SHOPE-PHNE8.png",
      badge: "11%",
      loading: "lazy",
    },

    {
      name: "OnePlus 13",
      spec: "256GB",
      price: "58,000,000",
      image: "shopeimage/phone/SHOPE-PHNE6.png",
      badge: "11%",
      loading: "lazy",
    },

    {
      name: "POCO F6 Pro",
      spec: "256GB",
      price: "58,000,000",
      image: "shopeimage/phone/SHOPE-PHNE7.png",
      badge: "11%",
      loading: "lazy",
    },

    {
      name: "iPhone SE (2022)",
      spec: "256GB",
      price: "58,000,000",
      image: "shopeimage/phone/SHOPE-PHNE10.png",
      badge: "11%",
      loading: "lazy",
    },

    {
      name: "Galaxy A56 5G",
      spec: "256GB",
      price: "58,000,000",
      image: "shopeimage/phone/SHOPE-PHNE9.png",
      badge: "11%",
      loading: "lazy",
    },
  ],

  // ===============================
  // Monitors
  // ===============================

  monitors: [
    {
      name: "LG UltraWide",
      spec: "34 Inch",
      price: "38,000,000",
      image: "image/monitor1.png",
      badge: "12%",
      loading: "lazy",
    },

    {
      name: "ASUS ProArt",
      spec: "32 Inch",
      price: "42,000,000",
      image: "image/monitor2.png",
      badge: "8%",
      loading: "lazy",
    },

    {
      name: "Samsung Odyssey",
      spec: "27 Inch",
      price: "31,000,000",
      image: "image/monitor3.png",
      badge: "18%",
      loading: "lazy",
    },

    {
      name: "MSI Gaming",
      spec: "165Hz",
      price: "26,000,000",
      image: "image/monitor4.png",
      badge: "10%",
      loading: "lazy",
    },

    {
      name: "BenQ Designer",
      spec: "4K",
      price: "36,000,000",
      image: "image/monitor5.png",
      badge: "9%",
      loading: "lazy",
    },
  ],

  // ===============================
  // Headphones
  // ===============================

  headphones: [
    {
      name: "Sony XM5",
      spec: "Wireless",
      price: "16,900,000",
      image: "image/headphone1.png",
      badge: "12%",
      loading: "lazy",
    },

    {
      name: "AirPods Pro 2",
      spec: "USB-C",
      price: "18,500,000",
      image: "image/headphone2.png",
      badge: "6%",
      loading: "lazy",
    },

    {
      name: "Galaxy Buds 3",
      spec: "ANC",
      price: "9,200,000",
      image: "image/headphone3.png",
      badge: "15%",
      loading: "lazy",
    },

    {
      name: "JBL Tune",
      spec: "Bluetooth",
      price: "4,900,000",
      image: "image/headphone4.png",
      badge: "20%",
      loading: "lazy",
    },

    {
      name: "Razer BlackShark",
      spec: "Gaming",
      price: "7,500,000",
      image: "image/headphone5.png",
      badge: "10%",
      loading: "lazy",
    },
  ],

  // ===============================
  // Accessories
  // ===============================

  accessories: [
    {
      name: "Mechanical Keyboard",
      spec: "RGB",
      price: "4,200,000",
      image: "image/acc1.png",
      badge: "18%",
      loading: "lazy",
    },

    {
      name: "Gaming Mouse",
      spec: "Wireless",
      price: "3,100,000",
      image: "image/acc2.png",
      badge: "10%",
      loading: "lazy",
    },

    {
      name: "USB Hub",
      spec: "Type-C",
      price: "1,400,000",
      image: "image/acc3.png",
      badge: "15%",
      loading: "lazy",
    },

    {
      name: "Laptop Stand",
      spec: "Aluminium",
      price: "1,800,000",
      image: "image/acc4.png",
      badge: "8%",
      loading: "lazy",
    },

    {
      name: "SSD 1TB",
      spec: "NVMe",
      price: "5,700,000",
      image: "image/acc5.png",
      badge: "12%",
      loading: "lazy",
    },
  ],
};

// ======================================================
// Shop Settings
// ======================================================

// در ابتدا از هر دسته فقط 4 محصول نمایش داده می‌شود.
const productsPerLoad = 4;

// تعداد محصولاتی که الان از هر دسته نمایش داده شده
const visibleProducts = {
  laptops: 4,

  mobiles: 4,

  monitors: 4,

  headphones: 4,

  accessories: 4,
};

// ======================================================
// Create Product Card
// ======================================================

function createProductCard(product) {
  return `

    <div class="product-card">

      <div class="badge">
        -${product.badge}
      </div>


      <i class="fa-regular fa-heart favorite"></i>


      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
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


        <a href="product.html">

          مشاهده محصول

          <i class="fa-solid fa-arrow-left"></i>

        </a>

      </div>

    </div>

  `;
}

// ======================================================
// Render Category
// ======================================================

function renderCategory(category) {
  const container = document.getElementById(category);

  if (!container) return;

  const categoryProducts = products[category];

  if (!categoryProducts) return;

  const visibleCount = visibleProducts[category] || productsPerLoad;

  const visibleItems = categoryProducts.slice(0, visibleCount);

  container.innerHTML = visibleItems.map(createProductCard).join("");
}

// ======================================================
// Update Load More Button
// ======================================================

function updateLoadMoreButton(category) {
  const button = document.querySelector(
    `.load-more-btn[data-category="${category}"]`,
  );

  if (!button) return;

  const categoryProducts = products[category];

  if (!categoryProducts) return;

  const visibleCount = visibleProducts[category];

  /*
    نکته:
    دکمه همیشه وجود دارد،
    حتی وقتی محصول بیشتری نداریم.
  */

  if (visibleCount >= categoryProducts.length) {
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
// Render Everything
// ======================================================

function renderAllCategories() {
  Object.keys(products).forEach((category) => {
    renderCategory(category);

    updateLoadMoreButton(category);
  });
}

// ======================================================
// Load More
// ======================================================

function loadMore(category) {
  if (!products[category]) return;

  const totalProducts = products[category].length;

  if (visibleProducts[category] >= totalProducts) {
    return;
  }

  visibleProducts[category] += productsPerLoad;

  renderCategory(category);

  updateLoadMoreButton(category);
}

// ======================================================
// Load More Button Events
// ======================================================

document.addEventListener("click", function (event) {
  const button = event.target.closest(".load-more-btn");

  if (!button) return;

  const category = button.dataset.category;

  if (!category) return;

  loadMore(category);
});

// ======================================================
// Initial Render
// ======================================================

document.addEventListener("DOMContentLoaded", function () {
  renderAllCategories();
});

const headerActions = document.querySelector(".header-actions");
const menuToggle = document.querySelector(".header-menu-toggle");

if (headerActions && menuToggle) {
  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();

    headerActions.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!headerActions.contains(event.target)) {
      headerActions.classList.remove("active");
    }
  });
}
