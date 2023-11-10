export { createInitialPage };

function createInitialPage() {
  const content = document.querySelector("#content");

  const header = document.createElement("h1");
  header.textContent = "Matija's Restaurant";
  content.appendChild(header);
}
