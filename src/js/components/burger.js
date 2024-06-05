export const useBurger = () => {
  const burgerBth = document.querySelector('[data-burger="btn"]');
  const burgerMenu = document.querySelector('[data-burger="menu"]');
  const overlay = document.querySelector('[data-burger="overlay"]');

  burgerBth.addEventListener('click', () => {
    burgerBth.classList.toggle('burger--active');
    burgerMenu.classList.toggle('header__right--visible');
    overlay.classList.toggle('overlay--visible');
  });

  const closeBurgerMenu = () => {
    burgerBth.classList.remove('burger--active');
    burgerMenu.classList.remove('header__right--visible');
    overlay.classList.remove('overlay--visible');
  };

  overlay.addEventListener('click', closeBurgerMenu);
};
