import { products } from './products.js';
import { ProductCard } from './ProductCard.js';
import './fakeGA.js';

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
  const { search } = elements;
  const { value } = search;
  const searchedProducts = products.filter((product) =>
    product.title.includes(value)
  );

  renderProductList(searchedProducts);
};

const addToCartHandler = (event) => {
  const { target } = event;
  const { id } = target.dataset;
  const isAddToCartButton = 'cart' in target.dataset;

  if (!isAddToCartButton) return;
  event.preventDefault();
  event.stopPropagation();

  console.log(`item with id: ${id} was added`);
};

const immediateHandler = (event) => {
  event.stopImmediatePropagation();
  console.log('Immediate');
};

searchFormRef.addEventListener('input', searchHandler);
productListRef.addEventListener('click', immediateHandler);
productListRef.addEventListener('click', addToCartHandler);

renderProductList(products);
