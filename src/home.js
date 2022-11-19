import heroImage from "./images/hero-image.png";
import logo from "./images/Logo.png";
import "./styles/style.css";

export default (() => {
  const homePage = () => {
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

    const ulItems = document.createElement("ul");
    ulItems.classList.add("ul-items");

    const listElementHome = document.createElement("li");
    const homeLink = document.createElement("a");
    homeLink.classList.add("links");
    homeLink.href = "./home.js";
    homeLink.textContent = "Home";
    listElementHome.appendChild(homeLink);

    const listElementAbout = document.createElement("li");
    const aboutLink = document.createElement("a");
    aboutLink.classList.add("links");
    aboutLink.href = "./about.js";
    aboutLink.textContent = "About";
    listElementAbout.appendChild(aboutLink);

    const listElementMenu = document.createElement("li");
    const menuLink = document.createElement("a");
    menuLink.classList.add("links");
    menuLink.href = "#";
    menuLink.textContent = "Menu";
    listElementMenu.appendChild(menuLink);

    const listElementContact = document.createElement("li");
    const contactLink = document.createElement("a");
    contactLink.classList.add("links");
    contactLink.href = "#";
    contactLink.textContent = "Contact";
    listElementContact.appendChild(contactLink);

    ulItems.append(
      listElementHome,
      listElementMenu,
      listElementAbout,
      listElementContact
    );

    navBarInner.append(logoImage, ulItems);

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
  };
  homePage();
  return homePage;
})();
