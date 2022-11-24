import { loadNav, loadMain, loadFooter } from "./home.js";
import { aboutPage } from "./about.js";
import { loadContact } from "./contact.js";
import { loadMenu } from "./menu.js";
import menuPdf from "./images/pdf/menu.pdf";

loadNav();
loadMain();
loadFooter();

function clearMain() {
  let mainContent = document.querySelector(".content");
  mainContent.innerHTML = "";
}

const mainContainer = document.querySelector("#container");
mainContainer.classList.add("home-hero");

let tabLinks = document.querySelectorAll(".links");
tabLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (this.textContent === "Home") {
      clearMain();
      loadMain();
      mainContainer.classList.add("home-hero");
    } else if (this.textContent === "About") {
      clearMain();
      aboutPage();
      mainContainer.classList.remove("home-hero");
      mainContainer.classList.add("bg-color");
    } else if (this.textContent === "Menu") {
      clearMain();
      loadMenu();
      mainContainer.classList.remove("home-hero");
      mainContainer.classList.add("bg-color");
    } else if (this.textContent === "Contact") {
      clearMain();
      loadContact();
      mainContainer.classList.remove("home-hero");
      mainContainer.classList.add("bg-color");
    }
  });
});

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", takeMeToMenu);

function takeMeToMenu() {
  window.open(menuPdf);
}

const navSlide = () => {
  const burgerMenu = document.querySelector(".mobile-icon");
  const nav = document.querySelector(".items");

  burgerMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
    // close
    burgerMenu.classList.toggle("toggle");
  });
};
navSlide();
