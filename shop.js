// ===============================
// Products Database
// ===============================

const products = {

laptops: [

{
name:"ASUS TUF F15",
spec:"Core i7 • RTX4060",
price:"72,900,000",
image:"image/laptop1.png",
badge:"15%"
},

{
name:"Lenovo Legion 5",
spec:"Ryzen 7 • RTX4060",
price:"69,500,000",
image:"image/laptop2.png",
badge:"12%"
},

{
name:"MSI Katana",
spec:"Core i7 • RTX4050",
price:"67,800,000",
image:"image/laptop3.png",
badge:"10%"
},

{
name:"HP Victus",
spec:"Ryzen 5 • RTX3050",
price:"55,900,000",
image:"image/laptop4.png",
badge:"8%"
},

{
name:"MacBook Air M3",
spec:"Apple M3 • 16GB",
price:"95,000,000",
image:"image/laptop5.png",
badge:"5%"
}

],

// ===============================

mobiles:[

{
name:"Galaxy S25 Ultra",
spec:"512GB",
price:"64,900,000",
image:"image/s25.png",
badge:"10%"
},

{
name:"iPhone 16 Pro",
spec:"256GB",
price:"98,000,000",
image:"image/iphone16.png",
badge:"5%"
},

{
name:"Xiaomi 15",
spec:"512GB",
price:"41,000,000",
image:"image/xiaomi15.png",
badge:"15%"
},

{
name:"Nothing Phone 3",
spec:"256GB",
price:"37,500,000",
image:"image/nothing.png",
badge:"7%"
},

{
name:"Pixel 10 Pro",
spec:"256GB",
price:"58,000,000",
image:"image/pixel.png",
badge:"11%"
}

],

// ===============================

monitors:[

{
name:"LG UltraWide",
spec:"34 Inch",
price:"38,000,000",
image:"image/monitor1.png",
badge:"12%"
},

{
name:"ASUS ProArt",
spec:"32 Inch",
price:"42,000,000",
image:"image/monitor2.png",
badge:"8%"
},

{
name:"Samsung Odyssey",
spec:"27 Inch",
price:"31,000,000",
image:"image/monitor3.png",
badge:"18%"
},

{
name:"MSI Gaming",
spec:"165Hz",
price:"26,000,000",
image:"image/monitor4.png",
badge:"10%"
},

{
name:"BenQ Designer",
spec:"4K",
price:"36,000,000",
image:"image/monitor5.png",
badge:"9%"
}

],

// ===============================

headphones:[

{
name:"Sony XM5",
spec:"Wireless",
price:"16,900,000",
image:"image/headphone1.png",
badge:"12%"
},

{
name:"AirPods Pro 2",
spec:"USB-C",
price:"18,500,000",
image:"image/headphone2.png",
badge:"6%"
},

{
name:"Galaxy Buds 3",
spec:"ANC",
price:"9,200,000",
image:"image/headphone3.png",
badge:"15%"
},

{
name:"JBL Tune",
spec:"Bluetooth",
price:"4,900,000",
image:"image/headphone4.png",
badge:"20%"
},

{
name:"Razer BlackShark",
spec:"Gaming",
price:"7,500,000",
image:"image/headphone5.png",
badge:"10%"
}

],

// ===============================

accessories:[

{
name:"Mechanical Keyboard",
spec:"RGB",
price:"4,200,000",
image:"image/acc1.png",
badge:"18%"
},

{
name:"Gaming Mouse",
spec:"Wireless",
price:"3,100,000",
image:"image/acc2.png",
badge:"10%"
},

{
name:"USB Hub",
spec:"Type-C",
price:"1,400,000",
image:"image/acc3.png",
badge:"15%"
},

{
name:"Laptop Stand",
spec:"Aluminium",
price:"1,800,000",
image:"image/acc4.png",
badge:"8%"
},

{
name:"SSD 1TB",
spec:"NVMe",
price:"5,700,000",
image:"image/acc5.png",
badge:"12%"
}

]

};

// ====================================
// Render Function
// ====================================

function renderProducts(list,id){

const container=document.getElementById(id);

container.innerHTML="";

list.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<div class="badge">-${product.badge}</div>

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

}

// ====================================
// Render All
// ====================================

renderProducts(products.laptops,"laptops");

renderProducts(products.mobiles,"mobiles");

renderProducts(products.monitors,"monitors");

renderProducts(products.headphones,"headphones");

renderProducts(products.accessories,"accessories");
