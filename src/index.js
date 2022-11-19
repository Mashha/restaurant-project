import homePage from "./home.js"


let tabLinks = document.querySelectorAll(".links")
    tabLinks.forEach(function(link){
        link.addEventListener("click", function(){
          if(this.textContent === "Home"){
          let content = document.querySelector("#container")
           content.appendChild(homePage())
          }
          
        })
    })