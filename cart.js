// ==========================================
// Nova Digital - Cart System
// ==========================================


// ==========================================
// Cart Storage
// ==========================================

let cart = JSON.parse(localStorage.getItem("novaCart")) || [];


// ==========================================
// Save Cart
// ==========================================

function saveCart() {
  localStorage.setItem("novaCart", JSON.stringify(cart));
}


// ==========================================
// Format Price
// ==========================================

function formatPrice(price) {
  return Number(price).toLocaleString("en-US");
}


// ==========================================
// Add Product To Cart
// ==========================================

function addToCart(product) {

  const existingProduct = cart.find(
    item => item.name === product.name
  );

  if (existingProduct) {

    existingProduct.quantity += 1;

  } else {

    cart.push({
      ...product,
      quantity: 1
    });

  }

  saveCart();

  renderCart();
}


// ==========================================
// Remove Product
// ==========================================

function removeFromCart(index) {

  cart.splice(index, 1);

  saveCart();

  renderCart();
}


// ==========================================
// Increase Quantity
// ==========================================

function increaseQuantity(index) {

  cart[index].quantity += 1;

  saveCart();

  renderCart();
}


// ==========================================
// Decrease Quantity
// ==========================================

function decreaseQuantity(index) {

  if (cart[index].quantity > 1) {

    cart[index].quantity -= 1;

  } else {

    cart.splice(index, 1);

  }

  saveCart();

  renderCart();
}


// ==========================================
// Render Cart
// ==========================================

function renderCart() {

  const container =
    document.getElementById("cartProducts");

  if (!container) return;


  container.innerHTML = "";


  // Empty Cart

  if (cart.length === 0) {

    container.innerHTML = `

      <div class="empty-cart">

        <i class="fa-solid fa-cart-shopping"></i>

        <h2>
          سبد خرید خالی است
        </h2>

        <p>
          هنوز محصولی به سبد خرید اضافه نکرده‌اید.
        </p>

        <a href="shop.html">
          مشاهده محصولات
        </a>

      </div>

    `;

    updateSummary();

    return;
  }


  // Products

  cart.forEach((product, index) => {

    const itemTotal =
      Number(product.price) *
      product.quantity;


    container.innerHTML += `

      <div class="cart-item">


        <!-- Product Image -->

        <div class="cart-item-image">

          <img
            src="${product.image}"
            alt="${product.name}"
          >

        </div>


        <!-- Product Info -->

        <div class="cart-item-info">

          <h3>
            ${product.name}
          </h3>

          <p>
            ${product.spec}
          </p>

          <div class="cart-item-price">

            ${formatPrice(product.price)}
            تومان

          </div>


          <!-- Quantity -->

          <div class="quantity-box">

            <button
              type="button"
              onclick="decreaseQuantity(${index})"
            >
              −
            </button>

            <span>
              ${product.quantity}
            </span>

            <button
              type="button"
              onclick="increaseQuantity(${index})"
            >
              +
            </button>

          </div>

        </div>


        <!-- Total -->

        <div class="cart-item-total">

          ${formatPrice(itemTotal)}
          تومان

        </div>


        <!-- Remove -->

        <button
          type="button"
          class="remove-cart-item"
          onclick="removeFromCart(${index})"
          aria-label="حذف محصول"
        >

          <i class="fa-solid fa-trash"></i>

        </button>


      </div>

    `;

  });


  updateSummary();
}


// ==========================================
// Update Summary
// ==========================================

function updateSummary() {

  const cartCount =
    document.getElementById("cartCount");

  const summaryCount =
    document.getElementById("summaryCount");

  const subtotal =
    document.getElementById("subtotal");

  const totalPrice =
    document.getElementById("totalPrice");


  // Total Quantity

  const totalQuantity =
    cart.reduce(
      (total, product) =>
        total + product.quantity,
      0
    );


  // Total Price

  const total =
    cart.reduce(
      (sum, product) =>
        sum +
        Number(product.price) *
        product.quantity,
      0
    );


  // Header Count

  if (cartCount) {

    cartCount.textContent =
      `${totalQuantity} محصول`;

  }


  // Summary Count

  if (summaryCount) {

    summaryCount.textContent =
      totalQuantity;

  }


  // Subtotal

  if (subtotal) {

    subtotal.textContent =
      `${formatPrice(total)} تومان`;

  }


  // Final Total

  if (totalPrice) {

    totalPrice.textContent =
      `${formatPrice(total)} تومان`;

  }

}


// ==========================================
// Checkout Button
// ==========================================

const checkoutBtn =
  document.getElementById("checkoutBtn");


if (checkoutBtn) {

  checkoutBtn.addEventListener(
    "click",
    function () {

      if (cart.length === 0) {

        alert(
          "سبد خرید شما خالی است."
        );

        return;

      }


      alert(
        "مرحله پرداخت در نسخه بعدی اضافه می‌شود."
      );

    }
  );

}


// ==========================================
// Render On Page Load
// ==========================================

renderCart();