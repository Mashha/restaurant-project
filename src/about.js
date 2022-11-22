import "./styles/about.css";
import aboutUs from "./images/about-us.jpg";

export function aboutPage() {
  const mainContentAbout = document.querySelector(".content");

  const aboutTitle = document.createElement("h1")
  aboutTitle.classList.add("about-title")
  aboutTitle.textContent = "About Us"

  // left side - text
  const leftContainer = document.createElement("div");
  leftContainer.classList.add("left-container");
  const paragraphOne = document.createElement("p");
  const paragraphTwo = document.createElement("p");
  const paragraphThree = document.createElement("p");
  paragraphOne.textContent =
    "Our coffee and dessert place is a hybrid combining a strong coffee culture and a robust food culture under one roof in a welcoming, cozy and comfortable neighborhood café.";
  paragraphTwo.innerHTML =
    "<span>Our Coffee</span> - We serve a range of espresso coffees made from the finest coffee beans, and our baristas really know their beans. With their superior technical knowledge and a passion for making amazing coffee they will make you the perfect cup.";
  paragraphThree.innerHTML =
    "<span>Our Food</span> - Our food is all natural, simple food made with local ingredients, wherever possible, to provide you with fresher, healthier and deliciously tasty meals. We have a well stocked pastry cabinet.";

  leftContainer.append(paragraphOne, paragraphTwo, paragraphThree);

  // right side image
  const rightContainer = document.createElement("div");
  rightContainer.classList.add("right-container");
  const aboutImage = document.createElement("img");
  aboutImage.src = aboutUs;
  rightContainer.appendChild(aboutImage);

  mainContentAbout.append(aboutTitle, leftContainer, rightContainer);
}
