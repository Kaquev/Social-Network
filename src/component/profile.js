import swal from 'sweetalert';
import userDefault from '../asset/icons/user-circle.png';
import { getPosts, deletePost, updatePost } from '../lib/firebase';

export const profile = async (navigateTo, getUserPhoto, getUserId, getUserName) => {
  document.body.classList.add('no-bg');
  const sectionProfile = document.createElement('section');
  sectionProfile.classList.add('profile_section');
  let HTMLPosts = '';
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const userId = sessionStorage.getItem('userId');
  const posts = await getPosts();
  const currentUserPosts = posts.filter((post) => post.userId === userId);

  currentUserPosts.forEach((post, index) => {
    const photoUrl = post.photo || userDefault;
    const postElement = document.createElement('div');
    postElement.innerHTML = `
    <div class="div_post">
      <div class="icon_perfil">
        <div class="perfil_post">
         ${photoUrl
    ? ` <img src="${photoUrl}" alt="random image">`
    : ''}
          <div class="drop_down">
            <i class="fa-solid fa-ellipsis-vertical fa-2xl" id="drop_btn"></i>
            <div id="myDropdown" class="drop_down_content">
              <a href="" class ="delete_post" id="deleteButton-${index}">Borrar</a>
              <a href="" data-content="${post.content}" data-id="${post.id}" class="edit_post">Editar</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container_text">
        <h3>${post.name}</h3>
        <h4>${post.creationDate.toDate().toLocaleDateString('es-CL', options)}</h4>
        <p><textarea readonly id="text-${post.id}" class="input-text-area" contenteditable >${post.content}</textarea></p>
        <div class="buttons-edit" id="buttons-${post.id}">
          <button class="button-edit">Actualizar post</button>
          <button class="button-cancel">Cancelar</button>
        </div>
      </div>
    </div>`;

    HTMLPosts += postElement.innerHTML;
  });

  const userName = await getUserName();
  const userPhoto = await getUserPhoto();
  const photoUrl = userPhoto || userDefault;

  const divProfile = `
    <div class="container_profile">
      <nav class="nav_profile">
       <i class="fa-solid fa-arrow-left fa-xl" style="color: #636060; cursor: pointer;" id="go_back"></i>
      </nav>
      <div class="edit_profile">
       <div>
         <img src="${photoUrl}" alt="random image" id="profile_photo_change" style="border-radius: 50px; width: 65px;">
       </div>
        <p id="current_user_name" >${userName}</p>
      </div>
  </div>


  </div>

    </div>
  <main id="main_feed">${HTMLPosts}</main>
</div>
  <i class="fa-solid fa-circle-plus fa-3x" id="add_post" style="color: #f1b33c;"></i>
<footer></footer>`;

  sectionProfile.innerHTML = divProfile;

  sectionProfile.querySelector('#go_back').addEventListener('click', () => {
    navigateTo('/feed');
  });

  sectionProfile.querySelector('#add_post').addEventListener('click', () => {
    navigateTo('/create_post');
  });

  sectionProfile.querySelectorAll('.drop_down').forEach((element) => {
    element.addEventListener('click', () => {
      element.querySelector('.drop_down_content').classList.toggle('show');
    });
  });

  sectionProfile.addEventListener('click', (event) => {
    if (!event.target.classList.contains('fa-ellipsis-vertical')) {
      sectionProfile.querySelectorAll('.drop_down').forEach((element) => {
        element.querySelector('.drop_down_content').classList.remove('show');
      });
    }
  });

  sectionProfile.querySelectorAll('.edit_post').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      const containerButtons = `#buttons-${element.getAttribute('data-id')}`;
      const textAreaEdit = `#text-${element.getAttribute('data-id')}`;
      const currentContent = `#text-${element.getAttribute('data-content')}`;
      sectionProfile.querySelector(containerButtons).style.display = 'block';
      sectionProfile.querySelector(textAreaEdit).classList.add('textarea-edit');
      sectionProfile.querySelector(textAreaEdit).removeAttribute('readonly');
      sectionProfile.querySelector(textAreaEdit).focus();
      sectionProfile.querySelector('.button-edit').addEventListener('click', (e) => {
        e.preventDefault();
        updatePost(element.getAttribute('data-id'), sectionProfile.querySelector(textAreaEdit).value).then(() => {
          swal({
            title: 'Perfecto!',
            text: 'El post fue editado con exito',
            icon: 'success',
          });
          sectionProfile.querySelector(textAreaEdit).classList.remove('textarea-edit');
          sectionProfile.querySelector(containerButtons).style.display = 'none';
          sectionProfile.querySelector(textAreaEdit).setAttribute('readonly', true);
        }, () => {
          swal({
            title: 'Ups!',
            text: 'El post no pudo ser editado',
            icon: 'warning',
          });
        });
      });
      sectionProfile.querySelector('.button-cancel').addEventListener('click', (e) => {
        e.preventDefault();
        sectionProfile.querySelector(textAreaEdit).value = currentContent;
        sectionProfile.querySelector(textAreaEdit).classList.remove('textarea-edit');
        sectionProfile.querySelector(containerButtons).style.display = 'none';
        sectionProfile.querySelector(textAreaEdit).setAttribute('readonly', true);
      });
    });
  });

  sectionProfile.querySelector('#main_feed').addEventListener('click', async (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.classList.contains('delete_post')) {
      const index = target.id.split('-')[1];
      swal({
        title: '¿Estás seguro?',
        text: 'Una vez eliminado, no podrás recuperar este post',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            deletePost(currentUserPosts[index].id, currentUserPosts[index].userId)
              .then(() => {
                console.log(`Éxito: El post ${currentUserPosts[index].id} se ha eliminado correctamente.`);
                swal('!Poof! !Tu post fue eliminado', {
                  icon: 'success',
                })
                  .then(() => {
                    window.location.reload();
                  });
              })
              .catch((error) => {
                console.error(`Error al eliminar el post ${currentUserPosts[index].id}:`, error);
              });
          } else {
            swal('!Tu post está guardado!');
          }
        });
    }
  });

  return sectionProfile;
};
