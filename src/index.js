import "./styles.css";
import { createHomePage } from "./home";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";

createHomePage();

const buttons = (function () {
  const buttons = document.querySelector("#buttons");
  const div = document.querySelector("#content");
  const home = document.createElement("button");
  home.classList.add("home");
  home.textContent = "HOME";
  const menu = document.createElement("button");
  menu.classList.add("menu");
  menu.textContent = "MENU";
  const contact = document.createElement("button");
  contact.classList.add("contact");
  contact.textContent = "CONTACT";
  document.body.appendChild(div);
  buttons.appendChild(home);
  buttons.appendChild(menu);
  buttons.appendChild(contact);

  function resetDiv() {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }

  return { home, menu, contact, resetDiv };
})();

buttons.home.addEventListener("click", () => {
  buttons.resetDiv();
  createHomePage();
});

buttons.menu.addEventListener("click", () => {
  buttons.resetDiv();
  createMenuPage();
});

buttons.contact.addEventListener("click", () => {
  buttons.resetDiv();
  createContactPage();
});
