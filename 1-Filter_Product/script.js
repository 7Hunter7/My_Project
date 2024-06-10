document.addEventListener("DOMContentLoaded", function (e) {
  const products = JSON.parse(productData);
  console.log(products);

  const categorySelect = document.querySelector("#category-select");
  console.log(categorySelect);
  const productList = document.querySelector("#product-list");
  console.log(productList);

  // Создание начального списка продуктов
  ProductList();
  function ProductList() {
    products.forEach((product) => {
      const productLi = document.createElement("li");
      productLi.textContent = product.name;
      productList.append(productLi);
    });
  }

  // Обработчик фильтрации списка продуктов
  categorySelect.addEventListener("change", function (e) {
    const newProducts = [];
    if (categorySelect.value === "all") {
      ProductList();
    } else {
      products.forEach((product) => {
        if (categorySelect.value === product.category) {
          newProducts.push(product);
        }
        return newProducts;
      });
      CreateProductList(newProducts);
    }
  });

  // Функция для создания нового списка продуктов
  const CreateProductList = (products) => {
    const oldProductList = document.querySelectorAll("li");
    oldProductList.forEach((product) => {
      product.remove();
    });
    products.forEach((product) => {
      const newProduct = document.createElement("li");
      newProduct.textContent = product.name;
      productList.append(newProduct);
    });
  };
});
