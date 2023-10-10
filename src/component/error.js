import logoTripify from '../asset/icons/Logo.tripify.svg';
// eslint-disable-next-line no-unused-vars
function error(navigateTo, getUserPhoto, getUserId) {
  const section = document.createElement('section');
  section.classList.add('error_container');

  const logo = document.createElement('img');
  logo.classList.add('img_logo');
  logo.src = logoTripify;

  const title = document.createElement('h2');
  title.classList.add('error_title');

  const backHome = document.createElement('button');
  backHome.classList.add('error_button');

  title.textContent = 'Error 404: página no encontrada';

  const userId = getUserId();

  backHome.textContent = 'Volver a inicio';
  backHome.addEventListener('click', (e) => {
    e.preventDefault();
    if (!userId) {
      navigateTo('/');
    } else {
      navigateTo('/feed');
    }
  });

  section.append(logo, title, backHome);
  return section;
}

export default error;
