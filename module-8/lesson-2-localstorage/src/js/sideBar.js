import { saveToClientStorage, getFromClientStorage } from './clientStorage';

const IS_SIDE_BAR_OPEN_KEY = 'isSideBarOpen';
const sideBarRef = document.querySelector('.side-bar');
const sideBarTogglerRef = document.querySelector('.toggle-side-menu');
let isOpen = getFromClientStorage(IS_SIDE_BAR_OPEN_KEY) ?? true;

const openSideBar = () => {
  sideBarRef.classList.remove('closed');
  sideBarTogglerRef.classList.remove('closed');
};

const closeSideBar = () => {
  sideBarRef.classList.add('closed');
  sideBarTogglerRef.classList.add('closed');
};

const moveSideBar = () => {
  isOpen ? openSideBar() : closeSideBar();
};

const handleSideBarToggle = () => {
  isOpen = !isOpen;
  moveSideBar();
  saveToClientStorage(IS_SIDE_BAR_OPEN_KEY, isOpen);
};

moveSideBar();

sideBarTogglerRef.addEventListener('click', handleSideBarToggle);
