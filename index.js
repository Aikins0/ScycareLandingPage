const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach((accordionBtn) => {
  accordionBtn.addEventListener('click', () => {
    const accordionContent = accordionBtn.nextElementSibling;
    const plusSign = accordionBtn.querySelector('.plus-sign');

    accordionBtns.forEach((otherAccordionBtn) => {
      if (otherAccordionBtn !== accordionBtn) {
        otherAccordionBtn.classList.remove('active');
        otherAccordionBtn.nextElementSibling.style.maxHeight = null;
        otherAccordionBtn.querySelector('.plus-sign').textContent = '+';
      }
    });

    accordionBtn.classList.toggle('active');

    if (accordionBtn.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      plusSign.textContent = '-';
    } else {
      accordionContent.style.maxHeight = null;
      plusSign.textContent = '+';
    }
  });
});