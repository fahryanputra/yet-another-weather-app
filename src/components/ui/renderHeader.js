import { createText, createIcon } from "Utilities/utility";
import renderContent from "UI/renderContent";

function createAppTitle() {
  const icon = createIcon("routine");
  const name = createText("Yet Another Weather App");

  const container = document.createElement("div");
  container.classList.add("title");
  container.appendChild(icon);
  container.appendChild(name);

  return container;
}

function submitForm(query, input) {
  if (input.value) {
    query.setCity(input.value);

    renderContent(query);
  }
}

function createUnitButton(query) {
  const button = document.createElement("button");
  button.textContent = "Metric";
  let unit = "metric";

  button.addEventListener("click", () => {
    if (unit === "metric") {
      button.textContent = "Imperial";
      unit = "imperial";
      query.setUnits("imperial");
      renderContent(query);
    } else {
      button.textContent = "Metric";
      unit = "metric";
      query.setUnits("metric");
      renderContent(query);
    }
  });

  const container = document.createElement("div");
  container.classList.add("btn-units");
  container.appendChild(button);

  return container;
}

function createSearchBar(query) {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Search");
  input.classList.add("search-form");

  input.onkeydown = (e) => {
    if (e.key === "Enter") {
      submitForm(query, input);
    }
  };

  const submit = document.createElement("button");
  submit.textContent = "Search";

  submit.addEventListener("click", () => {
    submitForm(query, input);
  });

  const container = document.createElement("div");
  container.classList.add("search-bar");
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
