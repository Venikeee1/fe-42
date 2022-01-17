export const ProductCard = ({ title, description, id, imgSrc }) => {
  const wrapper = document.createElement('div');

  wrapper.innerHTML = `
    <a href="/products/${id}" class="product">
      <img src="${imgSrc}" class="product__img">
      <div class="product__text">
        <h2 class="product__title">${title}</h2>
        <p class="product__description">${description}</p>
        <button data-cart data-analytics  data-id="${id}" class="btn btn--success">Add to cart</button>
      </div>
    </a>
  `;

  return wrapper.firstElementChild;
};

export default ProductCard;
