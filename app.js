let items = [
  {
    name: "Ironhack T",
    price: 10,
    image: "https://miro.medium.com/max/5190/1*aVsUjp1zvlRb1799gDjbLA@2x.jpeg",
  },
  {
    name: "Ironhack Hoodie",
    price: 15,
    image:
      "https://m.media-amazon.com/images/I/B1i3u9-Q-KS._AC_CLa%7C2140%2C2000%7CB1wqstnnTfS.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UL1500_.png",
  },
  {
    name: "Ironhack Sticker",
    price: 2,
    image:
      "https://e7.pngegg.com/pngimages/887/803/png-clipart-ironhack-web-development-job-startup-company-design-blue-user-interface-design-thumbnail.png",
  },
  {
    name: "Ironhack Mug",
    price: 8,
    image:
      "https://d0bb7f9bf11b5ad1a6b2-6175f06f5e3f64e15abbf67415a276ec.ssl.cf1.rackcdn.com/product-images/designlab/11-oz-traditional-ceramic-coffee-mugs-7102-white1582888132.jpg",
  },
];

const products = document.getElementById("products");
const cart = document.getElementById("cart");
const productList = document.getElementById("productList");
const cartList = document.getElementById("cartList");

function showProducts() {
  for (let i = 0; i > items.length; i++) {
    let item = items[i];

    let newName = document.createElement("p");
    let newPrice = document.createElement("span");
    let newImg = document.createElement("img");
    let newLi = document.createElement("li");

    newName.textContent = item.name;
    newPrice.textContent = `${item.price}$`;
    newImg.textContent = item.image;

    newLi.prepend(newName);
    newLi.prepend(newPrice);
    newLi.prepend(newImg);

    productList.prepend(newLi);
  }
}

showProducts();
