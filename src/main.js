import {createProfileTemplate} from './view/profile.js';

import {createMenuTemplate} from './view/menu.js';

import {createSortingTemplate} from './view/sorting.js';

import {createFilmsListTemplate} from './view/films-list.js';

import {createFilmCardTemplate} from './view/film-card.js';

import {createButtonTemplate} from './view/show-more-button.js';

import {createFilmsExtraListTemplate} from './view/films-extra-list.js';

import {createFooterStatisticsTemplate} from './view/footer-statistics.js';

const FILMS_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;

const EXTRA_TITLES = [`Top rated`, `Most commented`];

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerContainer = document.querySelector(`.header`);

const mainContainer = document.querySelector(`.main`);

const footerContainer = document.querySelector(`.footer`);

render(headerContainer, createProfileTemplate(), `beforeend`);

render(mainContainer, createMenuTemplate(), `afterbegin`);

const mainNavigationContainer = mainContainer.querySelector(`.main-navigation`);

render(mainNavigationContainer, createSortingTemplate(), `afterend`);

const sortingContainer = mainContainer.querySelector(`.sort`);

render(sortingContainer, createFilmsListTemplate(), `afterend`);

const filmsListSection = mainContainer.querySelector(`.films-list`);

const filmsListContainer = filmsListSection.querySelector(`.films-list__container`);

for (let i = 0; i < FILMS_COUNT; i++) {
  render(filmsListContainer, createFilmCardTemplate(), `afterbegin`);
}

render(filmsListContainer, createButtonTemplate(), `afterend`);

for (let i = EXTRA_TITLES.length - 1; i >= 0; i--) {
  render(filmsListSection, createFilmsExtraListTemplate(EXTRA_TITLES[i]), `afterend`);
}

const filmsExtraListContainers = mainContainer.querySelectorAll(`.films-list--extra .films-list__container`);

filmsExtraListContainers.forEach(function (item) {
  for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
    render(item, createFilmCardTemplate(), `afterbegin`);
  }
});

render(footerContainer, createFooterStatisticsTemplate(), `beforeend`);
