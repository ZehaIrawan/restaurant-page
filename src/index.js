import homeContent from './home';
import menuContent from './menu';
import contactContent from './contact';
import pageLoad from './pageLoad';

function tab() {
  const content = document.getElementById('content');

  const navbar = document.createElement('div');
  navbar.setAttribute('id', 'navbar');

  const homeNav = document.createElement('div');
  homeNav.innerHTML = 'Home';

  const menuNav = document.createElement('div');
  menuNav.innerHTML = 'Menu';

  const contactNav = document.createElement('div');
  contactNav.innerHTML = 'Contact';

  navbar.appendChild(homeNav);
  navbar.appendChild(menuNav);
  navbar.appendChild(contactNav);

  content.appendChild(navbar);

  homeNav.addEventListener('click', display('homeNav'));
  menuNav.addEventListener('click', display('menuNav'));
  contactNav.addEventListener('click', display('contactNav'));
}

tab();
homeContent();

function display(destination) {
  return function curried_funcion(e) {
    if (destination === 'homeNav') {
      pageLoad();
      tab();
      homeContent();
    } else if (destination === 'menuNav') {
      pageLoad();
      tab();
      menuContent();
    } else if (destination === 'contactNav') {
      pageLoad();
      tab();
      contactContent();
    }
  };
}
