// Scroll Header
function scrollHeader() {
  const header = document.getElementById('header');

  if (this.scrollY >= 50) {
    header.classList.add('active-header');
  } else {
    header.classList.remove('active-header');
  }
}

window.addEventListener('scroll', scrollHeader);

// Dropdown Menu
const dropdownMenus = document.querySelectorAll('.menu-desktop__item .dropdown-menu');

dropdownMenus.forEach((menu) => {
  menu.addEventListener('mouseleave', () => {
    menu.classList.remove('is-active');
  });
});

const menuItems = document.querySelectorAll('.menu-desktop__item');

menuItems.forEach((item) => {
  item.addEventListener('click', showDropdownMenu);
});

function showDropdownMenu(event) {
  event.preventDefault();

  dropdownMenus.forEach((menu) => {
    menu.classList.remove('is-active');
  });

  const menu = this.querySelector('.dropdown-menu');
  menu.classList.toggle('is-active');
}

// Menu Mobile
const showMenu = (bxId, menuId) => {
  const icon = document.getElementById('bx');
  const menuMobile = document.getElementById('menu-mobile');

  if (icon && menuMobile) {
    icon.addEventListener('click', () => {
      icon.classList.toggle('is-active');
      menuMobile.classList.toggle('is-active');
    });
  }
};

showMenu('bx', 'menu-mobile');
