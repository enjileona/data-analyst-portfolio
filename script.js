// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// ================= ABOUT SHOW MORE =================

const aboutToggle = document.getElementById('aboutToggle');
const aboutMore = document.getElementById('aboutMore');

if (aboutToggle && aboutMore) {

  aboutToggle.addEventListener('click', () => {

    const isOpen =
      aboutToggle.getAttribute('aria-expanded') === 'true';

    if (isOpen) {

      // Close section
      aboutMore.hidden = true;

      aboutToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      aboutToggle.textContent = 'Show More ↓';

    } else {

      // Open section
      aboutMore.hidden = false;

      aboutToggle.setAttribute(
        'aria-expanded',
        'true'
      );

      aboutToggle.textContent = 'Show Less ↑';

    }

  });

}


// ================= OPTIONAL: CLOSE ABOUT WITH ESC =================

document.addEventListener('keydown', e => {

  if (
    e.key === 'Escape' &&
    aboutToggle &&
    aboutMore &&
    aboutToggle.getAttribute('aria-expanded') === 'true'
  ) {

    aboutMore.hidden = true;

    aboutToggle.setAttribute(
      'aria-expanded',
      'false'
    );

    aboutToggle.textContent = 'Show More ↓';

    aboutToggle.focus();

  }

});
