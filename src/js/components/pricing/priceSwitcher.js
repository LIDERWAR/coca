export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrise = document.querySelector('[data-price="starter"]');
  const popularPrise = document.querySelector('[data-price="popular"]');
  const enterprisePrise = document.querySelector('[data-price="enterprise"]');

  const priceList = {
    starter: {
      default: 120,
      witchSale: 100,
    },
    popular: {
      default: 1680,
      witchSale: 1400,
    },
    enterprise: {
      default: 2520,
      witchSale: 2100,
    },
  };

  const setPricesWitchSale = () => {
    starterPrise.textContent = priceList.starter.witchSale;
    popularPrise.textContent = priceList.popular.witchSale;
    enterprisePrise.textContent = priceList.enterprise.witchSale;
  };
  const setPricesWitchDefault = () => {
    starterPrise.textContent = priceList.starter.default;
    popularPrise.textContent = priceList.popular.default;
    enterprisePrise.textContent = priceList.enterprise.default;
  };

  switcher.checked = true;

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWitchSale();
    } else {
      setPricesWitchDefault();
    }
  });
};
