(function () {
  function handleMenu() {
    var menuButtonEl = document.querySelector('#main-menu-button');
    var menuEl = document.querySelector('#main-menu');
    menuButtonEl.addEventListener('click', function () {
      menuEl.classList.toggle('hidden');
    });
  }

  // Smooth scrolling into view of anchor links
  function handleScrollIntoView() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    handleMenu();
    handleScrollIntoView();
  });




})();