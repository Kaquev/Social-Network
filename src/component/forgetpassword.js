import logotripify from '../asset/icons/Logo.tripify.svg';
import { resetEmail } from '../lib/firebase';

function forgetPass(navigateTo) {
  document.body.classList.remove('no-bg');
  const section = document.createElement('section');
  section.classList.add('reset_password_container');

  const logoForget = document.createElement('img');
  logoForget.classList.add('img_logo');
  logoForget.src = logotripify;

  const title = document.createElement('h1');
  title.classList.add('reset_password_title');

  const smallContainer = document.createElement('div');
  smallContainer.classList.add('reset_password_small_container');

  const emailSent = document.createElement('p');
  emailSent.classList.add('reset_password_paragraph');
  emailSent.style.display = 'none';

  const emailSentError = document.createElement('p');
  emailSentError.classList.add('reset_password_paragraph');
  emailSentError.style.display = 'none';
  emailSentError.style.color = 'var(--var_rosa)';

  const changePass = document.createElement('label');
  changePass.classList.add('reset_password_label');
  changePass.setAttribute('for', 'input_reset_password');

  const formEmail = document.createElement('form');
  formEmail.classList.add('reset_password_form');
  formEmail.setAttribute('id', 'input_reset_password');

  const email = document.createElement('input');
  email.type = 'email';
  email.classList.add('reset_password_email');
  email.setAttribute('id', 'email');

  const buttonSendEmail = document.createElement('button');
  buttonSendEmail.classList.add('reset_password_button');
  const backHome = document.createElement('button');
  backHome.classList.add('reset_password_button');

  title.textContent = 'Cambio de contraseña';
  emailSent.textContent = '¡Correo enviado exitosamente!';
  emailSentError.textContent = 'Error al enviar el correo de restablecimiento de contraseña';
  changePass.textContent = 'Te haremos llegar un email para cambiar tu contraseña.';

  email.setAttribute('placeholder', 'Ingresa tu email...');
  backHome.textContent = 'Volver a inicio';
  backHome.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/');
  });

  buttonSendEmail.textContent = 'Enviar';

  formEmail.addEventListener('submit', async (e) => {
    e.preventDefault();
    const finalEmail = email.value;
    resetEmail(finalEmail)
      .then(() => {
        changePass.style.display = 'none';
        formEmail.style.display = 'none';
        emailSent.style.display = 'block';
        emailSentError.style.display = 'none';
      })
      .catch(() => {
        emailSentError.style.display = 'block';
      });
  });

  formEmail.append(changePass, email, buttonSendEmail);
  smallContainer.append(formEmail, emailSent, emailSentError);
  section.append(logoForget, title, smallContainer, backHome);

  return section;
}

export default forgetPass;
