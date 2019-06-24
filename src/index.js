// import myName from './myName';
// import ourStory from './ourStory';

// function component() {
//   var element = document.createElement('div');

//   // use your function!
//   element.innerHTML = myName('Cody');

//   return element;
// }

// document.getElementById('content').appendChild(component());

function tabs() {
  const tabSwitch = document.createElement('div');
  tabSwitch.setAttribute('id', 'header');

  document.body.appendChild(tabSwitch);

  const menu = document.createElement('div');
  menu.innerHTML = 'Menu';

  const contact = document.createElement('div');
  contact.innerHTML = 'Contact';

  const ourStory = document.createElement('div');
  ourStory.innerHTML = 'Our Story';

  const reservation = document.createElement('div');
  reservation.innerHTML = 'Reservation';

  document.getElementById('header').appendChild(menu);
  document.getElementById('header').appendChild(contact);
  document.getElementById('header').appendChild(ourStory);
  document.getElementById('header').appendChild(reservation);

  menu.addEventListener('click', reset);
  contact.addEventListener('click', contactContent);
  ourStory.addEventListener('click', ourStoryContent);
  reservation.addEventListener('click', reservationContent);
}

function reset() {
  reset = document.getElementById('content');
  while (reset.firstChild) {
    reset.firstChild.remove();
  }
}

function menuContent() {
  let menu = document.createElement('p');

  menu.innerHTML = 'List of menu here';
  document.getElementById('content').appendChild(menu);
}

function contactContent() {
  let contact = document.createElement('p');

  contact.innerHTML = 'Contact page here';
  document.getElementById('content').appendChild(contact);
}

function ourStoryContent() {
  let contact = document.createElement('p');

  contact.innerHTML = 'Our Story here';
  document.getElementById('content').appendChild(contact);
}

function reservationContent() {
  let contact = document.createElement('p');

  contact.innerHTML = 'Reserve your spots here!';
  document.getElementById('content').appendChild(contact);
}

tabs();
