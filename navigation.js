(() => {
    const button = document.querySelector(".js-navigation__mobile-button");
    const menu = document.querySelector(".js-navigation__list")

    const toggleClass = () => {
        menu.classList.toggle("navigation__list--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();