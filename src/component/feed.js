import styles from '../css/feed.module.css';
import iconFeed from '../asset/icons/Logo.feed.png';
import iconUser from '../asset/icons/user-circle.png';

import { userSignOut } from '../lib/firebase';

function feed(navigateTo) {
  const sectionFeed = document.createElement('section');
  sectionFeed.className = styles.feed_section;

  const divFeed = `<div class="${styles.container_feed}">
  <header id="${styles.header_feed}">
      <div class="${styles.perfil}"></div>
      <div class="${styles.logo}">
      <img src="${iconFeed}" alt=" image">
        </div>
      </header>
      <div class="${styles.buscador}">
      <input  id="${styles.input_busqueda}" type="search" placeholder= "Buscar">
      </div>
  <main id="${styles.main_feed}">
  <div class="${styles.div_post}">
  <div class="${styles.icon_perfil}"'
  <div class="${styles.perfil_post}">
    <img src="${iconUser}" alt="random image">
  </div>
  <div class="${styles.container_text}">
    <h3>Sr. Fox</h3> 
    <h4>12 January 2019</h4>
    <p>The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</p>
  </div>
</div>
    </div>

      
  </main>
  <footer>
      tripify
  </footer>
  </div>`;

  const buttonLogOut = document.createElement('button');
  buttonLogOut.textContent = 'Cerrar Sesión';
  buttonLogOut.addEventListener('click', async () => {
    try {
      await userSignOut();
      navigateTo('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  });

  sectionFeed.innerHTML = divFeed;

  return sectionFeed;
}

export default feed;
