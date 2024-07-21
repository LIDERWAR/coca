export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('[data-theme-switcher]');
  const themeContent = document.querySelector('.header__switcher-text');

  const themeTargetDataset = themeTarget.dataset;
  const theme = localStorage.getItem('theme') || 'light';
  themeTargetDataset.theme = theme;

  if (theme === 'dark') {
    themeSwitcher.checked = true;
  }

  themeSwitcher.addEventListener('click', () => {
    if (themeTargetDataset.theme === 'light') {
      themeTargetDataset.theme = 'dark';
      themeContent.textContent = 'Light';
      localStorage.setItem('theme', 'dark');
    } else {
      themeTargetDataset.theme = 'light';
      themeContent.textContent = 'Dark';
      localStorage.setItem('theme', 'light');
    }
  });
};
