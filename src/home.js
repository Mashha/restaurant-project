import heroImage from "./images/hero-image.png";
import logo from "./images/Logo.png";
import "./styles/home.css";
import menuPdf from "./images/pdf/menu.pdf";

const mainContainer = document.getElementById("container");
//hero image
const heroImg = document.createElement("img");
heroImg.classList.add("hero-image");
heroImg.src = heroImage;

export function loadNav() {
  //navbar with logo and links
  const navBar = document.createElement("nav");
  const navBarInner = document.createElement("div");
  navBar.appendChild(navBarInner);
  navBar.classList.add("nav-bar");
  navBarInner.classList.add("nav-bar-inner");

  const logoImage = document.createElement("img");
  logoImage.src = logo;
  logoImage.id = "logo";

  const navItems = document.createElement("div");
  navItems.classList.add("items");

  const homeLink = document.createElement("button");
  homeLink.type = "button";
  homeLink.classList.add("links");
  homeLink.src = "./home.js";
  homeLink.textContent = "Home";

  const aboutLink = document.createElement("button");
  aboutLink.type = "button";
  aboutLink.classList.add("links");
  aboutLink.src = "./about.js";
  aboutLink.textContent = "About";

  const menuLink = document.createElement("button");
  menuLink.type = "button";
  menuLink.classList.add("links");
  menuLink.src = "./menu.js";
  menuLink.textContent = "Menu";

  const contactLink = document.createElement("button");
  contactLink.type = "button";
  contactLink.classList.add("links");
  contactLink.src = "./contact.js";
  contactLink.textContent = "Contact";

  // mobile nav
  const mobileNav = document.createElement("div");
  mobileNav.classList.add("mobile-icon");
  const bar1 = document.createElement("div");
  bar1.classList.add("bar-one");
  const bar2 = document.createElement("div");
  bar2.classList.add("bar-two");
  const bar3 = document.createElement("div");
  bar3.classList.add("bar-three");
  mobileNav.append(bar1, bar2, bar3);

  navItems.append(homeLink, aboutLink, menuLink, contactLink);

  navBarInner.append(logoImage, navItems, mobileNav);

  mainContainer.appendChild(navBar);
}

const mainContent = document.createElement("div");
mainContent.classList.add("content");

export function loadMain() {
  //content

  const mainContentInner = document.createElement("div");
  mainContentInner.classList.add("content-inner");

  // create title, para and button for main content
  const title = document.createElement("h1");
  title.textContent = "Coffee and desserts, a place of comfort";
  title.classList.add("main-title");
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "The best place in town to satisfy your sweet tooth and have a coffee break";
  paragraph.classList.add("para");
  const menuButton = document.createElement("a");
  menuButton.textContent = "Check our menu";
  menuButton.href = `${menuPdf}`;
  menuButton.setAttribute("target", "_blank");
  menuButton.classList.add("menu-btn");

  mainContentInner.append(title, paragraph, menuButton);
  mainContent.appendChild(mainContentInner);
  mainContainer.appendChild(mainContent);
}

//footer
export function loadFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const footerPara = document.createElement("p");
  footerPara.textContent = "Build and designed";
  const name = document.createElement("a");
  name.textContent = "Pimu";
  name.href = "https://github.com/Mashha/restaurant-project";
  const copyIcon = document.createElement("span");
  copyIcon.innerHTML = '<i class="fa-regular fa-copyright"></i>';

  footer.append(footerPara, copyIcon, name);

  mainContainer.appendChild(footer);
}
