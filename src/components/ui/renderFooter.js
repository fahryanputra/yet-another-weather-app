import { createText } from "Utilities/utility";

function renderFooter() {
  const copyright = createText("Copyright fahryanputra 2024");

  const container = document.querySelector("footer");
  container.appendChild(copyright);

  return container;
}

export default renderFooter;
