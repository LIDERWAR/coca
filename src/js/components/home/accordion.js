export const accordionFooter = () => {
  const accordionLists = document.querySelectorAll('.footer__item');

  accordionLists.forEach((el) => {
    el.addEventListener('click', (e) => {
      const accordionControl = e.target.closest('.footer__item-title');
      if (!accordionControl) return;
      e.preventDefault();
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      accordionItem.classList.toggle('footer__sublist--opened');

      if (accordionItem.classList.contains('footer__sublist--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
};
