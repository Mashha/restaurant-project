//import someText from "./about"
import "./styles/style.css"
import heroImage from "./images/hero-image.png"
import logo from "./images/Logo.png"


const mainContainer = document.getElementById("container")

const heroImg = document.createElement("img")
heroImg.src = heroImage
// left container
const containerLeft = document.createElement("div")
containerLeft.classList.add("container-left")

//logo
const logoDiv = document.createElement("div")
logoDiv.classList.add("logo-div")
const logoImage = document.createElement("img")
logoImage.src = logo
logoDiv.appendChild(logoImage)
//content
const mainContent = document.createElement("div")
mainContent.classList.add("content")

//footer
const footer = document.createElement("footer")
footer.classList.add("footer")
const footerPara = document.createElement("p")
footerPara.textContent = "Build and designed by Pimu"
footer.appendChild(footerPara)

// create title, para and button for main content
const title = document.createElement("h1")
title.textContent = "Coffee and desserts, a place of comfort"
title.classList.add("main-title")
const paragraph = document.createElement("p")
paragraph.textContent = "The best place in town to satisfy your sweet tooth and have a coffee break"
paragraph.classList.add("para")
const menuButton = document.createElement("button")
menuButton.textContent = "Check our menu"
menuButton.classList.add("menu-btn")

mainContent.append(title, paragraph, menuButton)
containerLeft.append(logoDiv, mainContent, footer)
mainContainer.appendChild(containerLeft)