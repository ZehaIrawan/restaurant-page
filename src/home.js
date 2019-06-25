const homeContent = () => {
  let content = document.getElementById('content');

  const chicken = document.createElement('div');
  chicken.setAttribute('id', 'menu')
  chicken.innerHTML =
    'Our restaurant serves the best spiciest & tastiest food!';

  content.appendChild(chicken);
};

export default homeContent;
