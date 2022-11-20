import heroImage from "./images/hero-image.png";
import logo from "./images/Logo.png";
import "./styles/style.css";

export default function homePage() {
    const mainContainer = document.getElementById("container");

    //hero image
    const heroImg = document.createElement("img");
    heroImg.src = heroImage;

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
    homeLink.type = "button"
    homeLink.classList.add("links");
    homeLink.src = "./home.js";
    homeLink.textContent = "Home";

    const aboutLink = document.createElement("button");
    aboutLink.type = "button"
    aboutLink.classList.add("links");
    aboutLink.src = "./about.js";
    aboutLink.textContent = "About";

    const menuLink = document.createElement("button");
    menuLink.type = "button"
    menuLink.classList.add("links");
    menuLink.src = "#";
    menuLink.textContent = "Menu";

    const contactLink = document.createElement("button");
    contactLink.type = "button"
    contactLink.classList.add("links");
    contactLink.src = "#";
    contactLink.textContent = "Contact";

    navItems.append(
      homeLink,
      aboutLink,
      menuLink,
      contactLink
    );

    navBarInner.append(logoImage, navItems);
    
    //content
    const mainContent = document.createElement("div");
    mainContent.classList.add("content");

    // create title, para and button for main content
    const title = document.createElement("h1");
    title.textContent = "Coffee and desserts, a place of comfort";
    title.classList.add("main-title");
    const paragraph = document.createElement("p");
    paragraph.textContent =
      "The best place in town to satisfy your sweet tooth and have a coffee break";
    paragraph.classList.add("para");
    const menuButton = document.createElement("button");
    menuButton.textContent = "Check our menu";
    menuButton.classList.add("menu-btn");

    //footer
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    const footerPara = document.createElement("p");
    footerPara.textContent = "Build and designed by Pimu";
    footer.appendChild(footerPara);

    mainContent.append(title, paragraph, menuButton);
    mainContainer.append(navBar, mainContent, footer);
    

    }

    