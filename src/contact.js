export function createContactPage() {
  const div = document.querySelector("#content");
  const header = document.createElement("h1");
  header.textContent = "Contact";
  div.appendChild(header);
  document.body.appendChild(div);

  const box = document.createElement("div");
  box.classList.add("box_for_p");
  const p = document.createElement("p");
  p.classList.add("contact_p");
  const email = "REALEMAIL@gmail.com";
  const phoneNum = "929 - 123 - 123 - 123 - 343";
  p.textContent = `You can order by sending a message on ${email} or by calling on ${phoneNum}.`;
  box.appendChild(p);
  div.appendChild(box);
}
