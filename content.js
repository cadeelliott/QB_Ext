// content.js
const elementsToDuplicate = document.querySelectorAll(".cell.col-1.left.wrap");

elementsToDuplicate.forEach((element) => {
  const clone = element.cloneNode(true);
  element.parentNode.insertBefore(clone, element.nextSibling);
});
