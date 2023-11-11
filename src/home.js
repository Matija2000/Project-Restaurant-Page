export function createHomePage() {
  const content = document.querySelector("#content");
  const header = document.createElement("h1");
  header.textContent = "Matija's Restaurant";
  const image = document.createElement("img");
  image.src = "./pictures/rest.jpg";
  const para = document.createElement("p");
  para.textContent = `
  Matija's restaurant is a culinary haven where flavors dance on your palate, leaving you in awe of each delectable bite.
  From the moment you step through the door, Matija's restaurant transforms dining into a gastronomic adventure, where every dish is a masterpiece.
  `;

  content.appendChild(header);
  content.appendChild(image);
  content.appendChild(para);
}
