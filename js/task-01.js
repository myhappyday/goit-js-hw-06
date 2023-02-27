const categoriesNumber = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesNumber.length}`);

categoriesNumber.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
