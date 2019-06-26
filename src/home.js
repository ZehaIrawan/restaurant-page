const homeContent = () => {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.setAttribute('id', 'container');

  const title = document.createElement('h2');
  title.innerHTML = 'Our restaurant serves the spiciest & tastiest food!';

  const img1 = document.createElement('img');
  img1.setAttribute(
    'src',
    'https://cdn.pixabay.com/photo/2016/12/21/20/07/spicy-1923785_960_720.png'
  );

  img1.setAttribute('id', 'center');

  img1.width, (img1.height = '200');

  const desc = document.createElement('p');
  desc.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae facilis recusandae, consequuntur illo expedita?';

  const desc2 = document.createElement('p');
  desc2.innerHTML =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste earum dolorum odio unde, a eligendi reiciendis fugit exercitationem eaque odit possimus tempora neque dicta ea molestiae voluptas nulla placeat nihil.';

  container.appendChild(title);
  container.appendChild(img1);
  container.appendChild(desc);
  // container.appendChild(desc2);
  content.appendChild(container);
};

export default homeContent;
