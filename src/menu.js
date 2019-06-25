const menuContent = () => {
  let content = document.getElementById('content');
  const chicken = document.createElement('h2');

  chicken.innerHTML = 'Menu Content';

  let img1 = document.createElement('img');
  img1.setAttribute(
    'src',
    'https://cdn.pixabay.com/photo/2018/04/21/03/47/food-3337621_960_720.jpg'
  );

  content.appendChild(chicken);
  content.appendChild(img1);
};

export default menuContent;
