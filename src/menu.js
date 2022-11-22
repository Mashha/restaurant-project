import "./styles/menu.css";

export function loadMenu() {
  const menuContent = document.querySelector(".content");

  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Menu";

  const menuContentInner = document.createElement("div");
  menuContentInner.classList.add("menu-inner");

  // left div
  const leftDiv = document.createElement("div");
  const leftDivInner = document.createElement("div");
  leftDiv.classList.add("left-div");
  const leftDivTitle = document.createElement("h3");
  leftDivTitle.classList.add("titles");
  leftDivTitle.textContent = "Coffee";

  const coffeeList = document.createElement("ul");
  coffeeList.classList.add("coffee-list");
  const espresso = document.createElement("li");
  espresso.textContent = "Espresso";
  const cappuccino = document.createElement("li");
  cappuccino.textContent = "Cappuccino";
  const white = document.createElement("li");
  white.textContent = "Flat White";
  const mocha = document.createElement("li");
  mocha.textContent = "Mocha";
  const cortado = document.createElement("li");
  cortado.textContent = "Cortado";
  const drip = document.createElement("li");
  drip.textContent = "Drip Coffee";
  const macchiato = document.createElement("li");
  macchiato.textContent = "Macchiato";
  const americano = document.createElement("li");
  americano.textContent = "Americano";

  coffeeList.append(
    espresso,
    cappuccino,
    white,
    mocha,
    cortado,
    drip,
    macchiato,
    americano
  );

  leftDivInner.append(leftDivTitle, coffeeList);
  leftDiv.appendChild(leftDivInner);

  // middle div
  const middleDiv = document.createElement("div");
  const middleDivInner = document.createElement("div");
  middleDiv.classList.add("middle-div");
  const middleDivTitle = document.createElement("h3");
  middleDivTitle.classList.add("titles");
  middleDivTitle.textContent = "Breakfast";

  const breakfastList = document.createElement("ul");
  breakfastList.classList.add("breakfast-list");
  const croissant = document.createElement("li");
  croissant.textContent = "Croissant";
  const toast = document.createElement("li");
  toast.textContent = "French toast";
  const pancakes = document.createElement("li");
  pancakes.textContent = "Pancakes";
  const porridge = document.createElement("li");
  porridge.textContent = "Porridge";
  const bagel = document.createElement("li");
  bagel.textContent = "Bagel";
  const waffles = document.createElement("li");
  waffles.textContent = "Waffles";
  const omlete = document.createElement("li");
  omlete.textContent = "Omlete";
  const fruit = document.createElement("li");
  fruit.textContent = "Fruit Bowl";

  breakfastList.append(
    croissant,
    toast,
    pancakes,
    porridge,
    bagel,
    waffles,
    omlete,
    fruit
  );
  middleDivInner.append(middleDivTitle, breakfastList);
  middleDiv.appendChild(middleDivInner);

  // right div
  const rightDiv = document.createElement("div");
  const rightDivInner = document.createElement("div");
  rightDiv.classList.add("right-div");
  const rightDivTitle = document.createElement("h3");
  rightDivTitle.classList.add("titles");
  rightDivTitle.textContent = "Desserts";

  const dessertsList = document.createElement("ul");
  dessertsList.classList.add("breakfast-list");
  const doughnut = document.createElement("li");
  doughnut.textContent = "Doughnut";
  const muffin = document.createElement("li");
  muffin.textContent = "Muffin";
  const cake = document.createElement("li");
  cake.textContent = "Cheesecake";
  const pie = document.createElement("li");
  pie.textContent = "Apple pie";
  const cupcake = document.createElement("li");
  cupcake.textContent = "Cupcake";
  const cookie = document.createElement("li");
  cookie.textContent = "Cookie";
  const tiramisu = document.createElement("li");
  tiramisu.textContent = "Tiramisu";
  const cobbler = document.createElement("li");
  cobbler.textContent = "Cobbler";

  dessertsList.append(
    doughnut,
    muffin,
    cake,
    pie,
    cupcake,
    cookie,
    tiramisu,
    cobbler
  );
  rightDivInner.append(rightDivTitle, dessertsList);
  rightDiv.appendChild(rightDivInner);
  //append to inner container and main
  menuContentInner.append(menuTitle, leftDiv, middleDiv, rightDiv);
  menuContent.append(menuContentInner);
}
