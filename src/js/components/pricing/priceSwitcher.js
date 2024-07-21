export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrise = document.querySelector('[data-price="starter"]');
  const popularPrise = document.querySelector('[data-price="popular"]');
  const enterprisePrise = document.querySelector('[data-price="enterprise"]');

  const priceList = {
    starter: {
      default: 4,
      witchSale: 100,
    },
    popular: {
      default: 56,
      witchSale: 1400,
    },
    enterprise: {
      default: 84,
      witchSale: 2100,
    },
    time: {
      day: '/day',
      month: '/mo',
    },
  };

  const setPricesWitchSale = () => {
    starterPrise.textContent = priceList.starter.witchSale;
    popularPrise.textContent = priceList.popular.witchSale;
    enterprisePrise.textContent = priceList.enterprise.witchSale;
    starterPrise.nextElementSibling.textContent = priceList.time.month;
    popularPrise.nextElementSibling.textContent = priceList.time.month;
    enterprisePrise.nextElementSibling.textContent = priceList.time.month;
  };
  const setPricesWitchDefault = () => {
    starterPrise.textContent = priceList.starter.default;
    popularPrise.textContent = priceList.popular.default;
    enterprisePrise.textContent = priceList.enterprise.default;
    starterPrise.nextElementSibling.textContent = priceList.time.day;
    popularPrise.nextElementSibling.textContent = priceList.time.day;
    enterprisePrise.nextElementSibling.textContent = priceList.time.day;
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
