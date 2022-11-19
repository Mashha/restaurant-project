import homePage from "./home.js";
import aboutPage from "./about.js";
homePage();

let tabLinks = document.querySelectorAll(".links");
let content = document.getElementById("container");
tabLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (this.textContent === "Home") {
      content.innerHTML = "";
      homePage();
    } else if (this.textContent === "About") {
      content.innerHTML = "";
      aboutPage();
    }
  });
});
