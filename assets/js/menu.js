const linkMenu = document.querySelector('.link-menu');
const menuLinks = document.querySelector('.menu-links');
const closeMenu = document.querySelector('.close-icon')

linkMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menuLinks.classList.add('menu-open')
});

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();

    menuLinks.classList.remove('menu-open');
})

