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

const buttons = document.getElementsByClassName("button");
buttons[0].setAttribute("id", "first");
buttons[1].setAttribute("id", "second");
buttons[2].setAttribute("id", "third");
buttons[3].setAttribute("id", "fourth");

const buttonOne = document.getElementById("first");
const buttonTwo = document.getElementById("second");
const buttonThree = document.getElementById("third");
const buttonFour = document.getElementById("fourth");

let count = 0;

buttonOne.addEventListener(
  "click",
  () => {
    cartList.prepend(buttonOne.parentElement);
    buttonOne.innerText = "Remove from Cart";
    buttonOne.setAttribute("id", "st");
    count = count + parseInt(buttonOne.previousElementSibling.innerText);
    h1.innerText = `Cart,  Total:${count}$`;
  },
  { once: true }
);
buttonTwo.addEventListener(
  "click",
  () => {
    cartList.prepend(buttonTwo.parentElement);
    buttonTwo.innerText = "Remove from Cart";
    buttonTwo.setAttribute("id", "nd");
    count = count + parseInt(buttonTwo.previousElementSibling.innerText);
    h1.innerText = `Cart,  Total:${count}$`;
  },
  { once: true }
);
buttonThree.addEventListener(
  "click",
  () => {
    cartList.prepend(buttonThree.parentElement);
    buttonThree.innerText = "Remove from Cart";
    buttonThree.setAttribute("id", "rd");
    count = count + parseInt(buttonThree.previousElementSibling.innerText);
    h1.innerText = `Cart,  Total:${count}$`;
  },
  { once: true }
);
buttonFour.addEventListener(
  "click",
  () => {
    cartList.prepend(buttonFour.parentElement);
    buttonFour.innerText = "Remove from Cart";
    buttonFour.setAttribute("id", "th");
    count = count + parseInt(buttonFour.previousElementSibling.innerText);
    h1.innerText = `Cart,  Total:${count}$`;
  },
  { once: true }
);

const h1 = document.getElementById("h1");

h1.innerText = `Cart,  Total:${count}$`;
