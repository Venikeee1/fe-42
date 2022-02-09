import './sass/main.scss';
import { createHeroesList } from './js/heroesList';
import { getHeroesList } from './js/api/dotaApi';

const renderHeroes = template => {
  const heroesListRef = document.querySelector('.hero-list');
  heroesListRef.innerHTML = template;
};

getHeroesList()
  .then(heroes => {
    const heroesTemplate = createHeroesList(heroes);
    renderHeroes(heroesTemplate);
  })
  .catch(error => console.log(error));
