document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('header__burger');
    const nav = document.getElementById('header__nav');

    burger.addEventListener('click', function () {
      nav.classList.toggle('header__nav_show');
      burger.classList.toggle('header__burger_clicked');
    });
});