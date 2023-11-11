export function createMenuPage() {
  const box1 = createDivBox();
  const box2 = createDivBox();
  const box3 = createDivBox();
  /*  */
  const div = document.querySelector("#content");
  const header = document.createElement("h1");
  header.textContent = "Menu";
  div.appendChild(header);
  /*  */
  const appetizer = document.createElement("h2");
  appetizer.textContent = "Appetizer";
  div.appendChild(appetizer);
  const title1 = createTitle();
  title1.textContent = "vegetable salad served on white bowl";
  const img1 = createImage();
  img1.src = "./pictures/1.jpg";
  const p1 = createParagraph();
  p1.textContent =
    "Indulge in the vibrant flavors of our fresh vegetable salad, artfully presented in a pristine white bowl, a culinary masterpiece that delights the senses.";

  const title2 = createTitle();
  title2.textContent = "green vegetable on brown ceramic plate";
  const img2 = createImage();
  img2.src = "./pictures/2.jpg";
  const p2 = createParagraph();
  p2.textContent =
    "Savor the crisp goodness of our green vegetable medley, elegantly arranged on a rustic brown ceramic plate, a symphony of colors and textures that embodies both taste and visual appeal.";

  box1.appendChild(title1);
  box1.appendChild(img1);
  box1.appendChild(p1);
  box2.appendChild(title2);
  box2.appendChild(img2);
  box2.appendChild(p2);

  div.appendChild(box1);
  div.appendChild(box2);

  const mainDish = document.createElement("h2");
  mainDish.textContent = "Main dish";
  div.appendChild(mainDish);
  const title3 = createTitle();
  title3.textContent = "Vegan pizza";
  const img3 = createImage();
  img3.src = "./pictures/3.jpg";
  const p3 = createParagraph();
  p3.textContent =
    "Experience the perfect harmony of plant-based delight with our vegan pizza, crafted to perfection and served on a golden-brown crust that captures the essence of flavor without compromise";
  box3.appendChild(title3);
  box3.appendChild(img3);
  box3.appendChild(p3);
  div.appendChild(box3);

  document.body.appendChild(div);
}

function createDivBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  return box;
}

function createTitle() {
  const title = document.createElement("h3");
  return title;
}

function createImage() {
  const image = document.createElement("img");
  return image;
}

function createParagraph() {
  const para = document.createElement("p");
  return para;
}
