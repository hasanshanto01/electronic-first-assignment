import './SCSS/main.scss'

const navbar = document.querySelector('.navbar');
const navbarItems = document.querySelectorAll('.navbar-item');
const searchBtn = document.querySelector('.search-btn');
const searchBar = document.querySelector('.search-bar');
const searchCloseBtn = document.querySelector('.search-close-btn');

navbarItems.forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    navbarItems.forEach(navItem => {
      navItem.classList.remove('active', 'inactive');
      if (!isActive && navItem !== item) {
        navItem.classList.add('inactive');
      }
    });
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

searchBtn.addEventListener('click', () => {
  navbar.classList.add('search-active');
  searchBar.classList.add('search-active');
})

searchCloseBtn.addEventListener('click', () => {
  navbar.classList.remove('search-active');
  searchBar.classList.remove('search-active');
})
