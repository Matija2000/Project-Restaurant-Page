export function createContactPage() {
  const div = document.querySelector("#content");
  const header = document.createElement("h1");
  header.textContent = "Contact";
  div.appendChild(header);
  document.body.appendChild(div);
}

function createDivBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  return box;
}
