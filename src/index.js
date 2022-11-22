import { loadNav, loadMain, loadFooter } from "./home.js";
import { aboutPage } from "./about.js";
import { loadContact } from "./contact.js";
import { loadMenu } from "./menu.js";

loadNav();
loadMain();
loadFooter();

function clearMain() {
  let mainContent = document.querySelector(".content");
  mainContent.innerHTML = "";
}

let tabLinks = document.querySelectorAll(".links");
tabLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (this.textContent === "Home") {
      clearMain();
      loadMain();
    } else if (this.textContent === "About") {
      clearMain();
      aboutPage();
    } else if (this.textContent === "Menu") {
      clearMain();
      loadMenu();
    } else if (this.textContent === "Contact") {
      clearMain();
      loadContact();
    }
  });
});
