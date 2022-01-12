export const ProductCard = ({ title, description, id, imgSrc }) => {
  const productWrapper = document.createElement('div');
  const productImg = document.createElement('img');
  const productTitle = document.createElement('h2');
  const productText = document.createElement('div');
  const productDescription = document.createElement('p');
  const productButton = document.createElement('button');

  productWrapper.classList.add('product');
  productImg.src = imgSrc;
  productImg.classList.add('product__img');
  productTitle.classList.add('product__title');
  productDescription.classList.add('product__description');
  productButton.classList.add('btn', 'btn--success');
  productText.classList.add('product__text');

  productTitle.textContent = title;
  productDescription.textContent = description;
  productButton.textContent = 'Add to cart';

  productButton.dataset.id = id;

  productText.append(productTitle, productDescription, productButton);
  productWrapper.append(productImg, productText);

  return productWrapper;
};

export default ProductCard;
