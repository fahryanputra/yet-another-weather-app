import { createText } from "Utilities/utility";

function renderFooter() {
  const copyright = createText("Copyright \u00A9 2024 Fahryanputra");

  const container = document.querySelector("footer");
  container.appendChild(copyright);

  return container;
}

export default renderFooter;
