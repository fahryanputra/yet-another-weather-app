import { createText, createIcon } from "Utilities/utility";
import renderContent from "./renderContent";

function createAppTitle() {
  const icon = createIcon("routine");
  const name = createText("Yet Another Weather App");

  const container = document.createElement("div");
  container.appendChild(icon);
  container.appendChild(name);

  return container;
}

function createSearchBar() {
  const icon = createIcon("search");
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  const submit = document.createElement("button");
  submit.textContent = "Search";

  submit.addEventListener("click", () => {
    if (input.value) {
      const content = document.querySelector(".content");
      content.textContent = "";
      renderContent(input.value);
    }
  });

  const container = document.createElement("div");
  container.classList.add("search-bar");
  container.appendChild(icon);
  container.appendChild(input);
  container.appendChild(submit);

  return container;
}

function renderHeader() {
  const left = createAppTitle();
  const right = createSearchBar();

  const container = document.querySelector("header");
  container.appendChild(left);
  container.appendChild(right);

  return container;
}

export default renderHeader;
