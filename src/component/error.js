import styles from '../css/error.module.css';
import iconLogo from '../asset/icons/Logo.tripify.svg';

function error(navigateTo) {
  const section = document.createElement('section');
  section.className = styles.error_container;

  const logo = document.createElement('img');
  logo.className = styles.img_logo;
  logo.src = iconLogo;

  const title = document.createElement('h2');
  title.className = styles.error_title;

  const backHome = document.createElement('button');
  backHome.className = styles.error_button;

  title.textContent = 'Error 404: página no encontrada';

  backHome.textContent = 'Volver a inicio';
  backHome.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/');
  });

  section.append(logo, title, backHome);
  return section;
}

export default error;
