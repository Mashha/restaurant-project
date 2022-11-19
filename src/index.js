import homePage from "./home.js"


let tabLinks = document.querySelectorAll(".links")
    tabLinks.forEach(function(link){
        link.addEventListener("click", function(){
          if(this.textContent === "Home"){
            homePage()
           // window.open(this.href, "_self")
          }
          
        })
    })