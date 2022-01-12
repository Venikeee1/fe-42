import { products } from './products.js';
import { ProductCard } from './ProductCard.js';

const productListRef = document.querySelector('.list');
const searchFormRef = document.querySelector('.search');

const clearProductList = () => {
  productListRef.innerHTML = '';
};

const renderProductList = (products) => {
  clearProductList();

  const productsCards = products.map((product) => ProductCard(product));
  productListRef.append(...productsCards);
};

const searchHandler = (event) => {
  event.preventDefault();

  const { elements } = event.currentTarget;
  // const {
  //   search: { value },
  // } = elements;
  const { search } = elements;
  const { value } = search;
  const searchedProducts = products.filter((product) =>
    product.title.includes(value)
  );

  renderProductList(searchedProducts);
};

searchFormRef.addEventListener('input', searchHandler);

renderProductList(products);
