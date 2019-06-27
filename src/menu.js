const menuContent = () => {
  const container = document.createElement('div');
  container.setAttribute('id', 'container');
  container.setAttribute('class', 'flex');

  const content = document.getElementById('content');
  const chicken = document.createElement('h2');
  chicken.setAttribute('id', 'menuTitle');

  chicken.innerHTML = 'Our Menu';

  const img1 = document.createElement('img');
  img1.setAttribute(
    'src',
    'https://cdn.pixabay.com/photo/2018/04/21/03/47/food-3337621_960_720.jpg'
  );

  img1.width, (img1.height = '200');

  const caps = document.createElement('figcaption');
  caps.innerHTML = 'Spicy Salad';

  container.appendChild(chicken);
  container.appendChild(img1);
  container.appendChild(caps);
  content.appendChild(container);
};

export default menuContent;
