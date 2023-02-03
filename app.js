const items = [
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

const products = document.querySelector("#products");
const cart = document.querySelector("#cart");
const productList = document.querySelector("#productList");
const cartList = document.querySelector("#cartList");
const h2 = document.getElementById("h2");

items.forEach((item) => {
  const newName = document.createElement("p");
  const newPrice = document.createElement("p");
  const newImg = document.createElement("img");
  const newLi = document.createElement("li");
  const newButton = document.createElement("button");

  newButton.innerText = "Add to Cart";
  newButton.classList.add("button");
  newName.innerText = item.name;
  newPrice.innerText = `${item.price}$`;
  newImg.src = item.image;

  newLi.prepend(newButton);
  newLi.prepend(newPrice);
  newLi.prepend(newName);
  newLi.prepend(newImg);

  productList.prepend(newLi);
});

let sum = 0;
const buttons = document.getElementsByClassName("button");

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    const product = event.target.parentElement;
    const price = parseInt(product.children[2].innerText.slice(0, -1));
    if (event.target.innerText === "Add to Cart") {
      sum += price;
      cartList.prepend(product);
      event.target.innerText = "Remove from Cart";
    } else if (event.target.innerText === "Remove from Cart") {
      sum -= price;
      productList.prepend(product);
      event.target.innerText = "Add to Cart";
    }
    h2.innerText = `Total: ${sum}$`;
  });
}
