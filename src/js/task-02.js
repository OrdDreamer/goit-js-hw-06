const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElement = document.querySelector("ul#ingredients");

if (listElement) {
  const children = ingredients.map((ingredient) => {
    const child = document.createElement("li");
    child.classList.add("item");
    child.textContent = ingredient;
    return child;
  });
  listElement.append(...children);
}
