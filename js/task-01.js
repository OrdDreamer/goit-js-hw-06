const categories = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2");
  console.log(
    `Category: ${
      categoryTitle ? categoryTitle.textContent : "Category title not found"
    }`
  );

  const categoryList = category.querySelector("ul");
  console.log(`Elements: ${categoryList ? categoryList.children.length : 0}`);
});
