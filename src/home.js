import rest from "./pictures/rest.jpg";
export function createHomePage() {
  const content = document.querySelector("#content");
  const header = document.createElement("h1");
  header.textContent = "Matija's Restaurant";
  const divForImg = document.createElement("div");
  divForImg.classList.add("divForImg");
  const image = document.createElement("img");
  image.classList.add("home_image");
  image.src = rest;
  const para = document.createElement("p");
  para.textContent = `
  Matija's restaurant is a culinary haven where flavors dance on your palate, leaving you in awe of each delectable bite.
  From the moment you step through the door, Matija's restaurant transforms dining into a gastronomic adventure, where every dish is a masterpiece.
  `;
  divForImg.appendChild(image);
  content.appendChild(header);
  content.appendChild(divForImg);
  content.appendChild(para);
}
