import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

(function(){
  const searchBtn = document.querySelector("#searchBtn");
  const searchInput = document.querySelector('#searchinput');
  const sideNav = document.querySelector('#sideNav');
  const sideNavButton = document.querySelector('#navButton');
  const sideNavArrowImage = document.querySelector('#navArrow');

  searchBtn.addEventListener('click', toggleSearchinputVisibility);
  sideNavButton.addEventListener('click', toggleNavigation);

  function toggleSearchinputVisibility(e) {
    e.preventDefault();
    searchInput.classList.toggle('search__input--hidden');
  }

  function toggleNavigation() {
    this.classList.toggle('sideNav__button--afterText');

    if(sideNav.classList.contains('sideNav--hidden')) {
      sideNav.classList.remove('sideNav--hidden');
      sideNavArrowImage.classList.add('sideNav__arrowIcon--opened');
    } else {
      sideNav.classList.add('sideNav--hidden');
      sideNavArrowImage.classList.remove('sideNav__arrowIcon--opened');
    }
  }
})();
