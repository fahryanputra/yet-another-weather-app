// Module for helping create images and paragraphs
// Function to create text with 1 parameters.
// text content
function createText(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  return paragraph;
}

// Function to create image with credits. Containing 3 parameters.
// Image source, credit link and credit text.
function createImage(src, creditLink, creditText) {
  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "img-container");

  const image = new Image();
  image.src = src;

  const creditContainer = document.createElement("div");
  creditContainer.setAttribute("class", "credit");

  const credit = document.createElement("a");
  credit.href = creditLink;
  credit.textContent = creditText;

  creditContainer.appendChild(credit);

  imageContainer.appendChild(image);
  imageContainer.appendChild(creditContainer);

  return imageContainer;
}

// Create icon from https://fonts.google.com/icons
function createIcon(text) {
  const icon = document.createElement("span");
  icon.setAttribute("class", "material-symbols-outlined");
  icon.textContent = text;

  return icon;
}

// Capitalize each word in a text
function capitalizeEachWord(text) {
  const words = text.split(" ");

  return words
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

export { createText, createImage, createIcon, capitalizeEachWord };
