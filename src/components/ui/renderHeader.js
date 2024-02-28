import { createText, createIcon } from "Utilities/utility";
import renderContent from "UI/renderContent";

function createAppTitle() {
  const icon = createIcon("routine");
  const name = createText("Yet Another Weather App");

  const container = document.createElement("div");
  container.appendChild(icon);
  container.appendChild(name);

  return container;
}

function createUnitButton(query) {
  const button = document.createElement("button");
  button.textContent = "Metric";
  let unit = "metric";

  button.addEventListener("click", () => {
    const content = document.querySelector(".content");
    if (unit === "metric") {
      button.textContent = "Imperial";
      unit = "imperial";
      query.setUnits("imperial");
      content.textContent = "";
      renderContent(query);
    } else {
      button.textContent = "Metric";
      unit = "metric";
      query.setUnits("metric");
      content.textContent = "";
      renderContent(query);
    }
  });

  const container = document.createElement("div");
  container.classList.add("btn-units");
  container.appendChild(button);

  return container;
}

function createSearchBar(query) {
  const icon = createIcon("search");
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  const submit = document.createElement("button");
  submit.textContent = "Search";

  submit.addEventListener("click", () => {
    if (input.value) {
      const content = document.querySelector(".content");
      content.textContent = "";
      query.setCity(input.value);
      renderContent(query);
    }
  });

  const container = document.createElement("div");
  container.classList.add("search-bar");
  container.appendChild(icon);
  container.appendChild(input);
  container.appendChild(submit);

  return container;
}

function renderHeader(query) {
  const title = createAppTitle();
  const units = createUnitButton(query);
  const searchBar = createSearchBar(query);

  const container = document.querySelector("header");
  container.appendChild(title);
  container.appendChild(units);
  container.appendChild(searchBar);

  return container;
}

export default renderHeader;
