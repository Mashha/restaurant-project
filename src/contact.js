import "./styles/contact.css";

export function loadContact() {
  const mainContent = document.querySelector(".content");

  const contactTitle = document.createElement("h1");
  contactTitle.classList.add("contact-title");
  contactTitle.textContent = "Contact";

  // contact of the shop
  const leftContainer = document.createElement("div");
  leftContainer.classList.add("left-container-text");

  const title = document.createElement("h2");
  title.textContent = "Coffee shop location";

  const addressDiv = document.createElement("div");
  const address = document.createElement("div");
  addressDiv.classList.add("address-div");
  address.innerHTML =
    "<address>Coffee and desserts shop<br> Kauppakatu 14/2 <br> 40100 Jyväskylä <br> Finland</address>";
  const addressIcon = document.createElement("span");
  addressIcon.innerHTML = "<i class='fas fa-map-marker-alt'></i>";
  addressDiv.append(addressIcon, address);

  const phone = document.createElement("div");
  phone.classList.add("phone-div");
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "+98 12345678";
  const phoneIcon = document.createElement("span");
  phoneIcon.innerHTML = "<i class='fas fa-phone'></i>";
  phone.append(phoneIcon, phoneNumber);

  const emailAddress = document.createElement("div");
  emailAddress.classList.add("email-div");
  const email = document.createElement("p");
  email.textContent = "coffeeandbakery@email.com";
  const emailIcon = document.createElement("span");
  emailIcon.innerHTML = "<i class='fa-regular fa-envelope'></i>";
  emailAddress.append(emailIcon, email);

  leftContainer.append(title, addressDiv, phone, emailAddress);
  // map
  const rightContainer = document.createElement("div");
  rightContainer.classList.add("right-container-map");
  rightContainer.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858.3403782205978!2d25.739988316422053!3d62.239889682770134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4685741787ac6a35%3A0x7e013f9e041e7ead!2sKauppakatu%2014%2C%2040100%20Jyv%C3%A4skyl%C3%A4%2C%20Finland!5e0!3m2!1sen!2ssi!4v1669126932035!5m2!1sen!2ssi" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  mainContent.append(contactTitle, leftContainer, rightContainer);
}
