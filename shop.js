const products = [
  {
    name: "ASUS TUF F15",
    spec: "Core i7 • RTX4060 • 16GB",
    price: "72,900,000",
    image: "image/laptop1.png",
    badge: "-15%",
  },

  {
    name: "ASUS ROG Strix G16",
    spec: "Core i9 • RTX4070 • 32GB",
    price: "98,000,000",
    image: "image/laptop2.png",
    badge: "-10%",
  },

  {
    name: "Lenovo LOQ 15",
    spec: "Core i7 • RTX4050 • 16GB",
    price: "65,500,000",
    image: "image/laptop3.png",
    badge: "-12%",
  },

  {
    name: "MacBook Air M3",
    spec: "M3 • 16GB • 512GB",
    price: "89,000,000",
    image: "image/laptop4.png",
    badge: "-8%",
  },
   {
    name: "MacBook Air M5",
    spec: "M3 • 16GB • 512GB",
    price: "139,000,000",
    image: "image/laptop4.png",
    badge: "-8%",
  },
];
const productsGrid = document.getElementById("productsGrid");

products.forEach((product) => {
  productsGrid.innerHTML += `

<div class="product-card">

<div class="badge">${product.badge}</div>

<i class="fa-regular fa-heart favorite"></i>

<div class="product-image">

<img src="${product.image}">

</div>

<div class="product-info">

<h3>${product.name}</h3>

<span>${product.spec}</span>

<div class="price">

${product.price} تومان

</div>

<a href="#">

مشاهده محصول

<i class="fa-solid fa-arrow-left"></i>

</a>

</div>

</div>

`;
});
