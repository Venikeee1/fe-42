import { HeroView } from './heroView';

export const createHeroesList = heroes => {
  return heroes.map(hero => HeroView(hero)).join('');
};
