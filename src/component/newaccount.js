import logotripify from '../asset/icons/Logo.tripify.svg';
import { createAccount } from '../lib/firebase';

function newAccount(navigateTo) {
  document.body.classList.remove('no-bg');
  const sectionAccount = document.createElement('section');
  sectionAccount.classList.add('container_account');

  const logo = document.createElement('img');
  logo.classList.add('img_logo');

  const formGrilla = document.createElement('form');
  formGrilla.classList.add('grilla_form');

  const labelEmail = document.createElement('label');
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  const labelUserName = document.createElement('label');
  const inputUserName = document.createElement('input');
  inputUserName.type = 'text';
  const labelPass = document.createElement('label');
  const inputPass = document.createElement('input');
  inputPass.type = 'password';
  const labelRepeatPass = document.createElement('label');
  const inputRepeatPass = document.createElement('input');
  inputRepeatPass.type = 'password';

  const btnAccount = document.createElement('button');
  btnAccount.classList.add('btn_crear_cuenta');

  const linkLogin = document.createElement('p');
  linkLogin.classList.add('back_home');

  const singIn = document.createElement('a');

  logo.src = logotripify;

  labelEmail.textContent = 'Correo electrónico';
  labelUserName.textContent = 'Nombre de usuario';
  labelPass.textContent = 'Contraseña';
  labelRepeatPass.textContent = 'Repetir contraseña';

  btnAccount.textContent = 'Crear Cuenta';

  linkLogin.innerHTML = '¿Ya tienes una cuenta? ';
  singIn.innerHTML = ' Inicia sesión';
  singIn.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/');
  });
  singIn.setAttribute('href', '');

  btnAccount.addEventListener('click', async (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const userNamePattern = /^[a-zA-Z0-9]{3,12}$/;

    if (
      inputEmail.value.trim() !== ''
      && inputUserName.value.trim() !== ''
      && inputPass.value.trim() !== ''
      && inputRepeatPass.value.trim() !== '') {
      if (!emailPattern.test(inputEmail.value)) {
        // eslint-disable-next-line no-alert
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
      }

      if (!userNamePattern.test(inputUserName.value)) {
        // eslint-disable-next-line no-alert
        alert('El nombre de usuario debe tener entre 3 y 12 caracteres alfanuméricos.');
        return;
      }

      if (!passwordPattern.test(inputPass.value)) {
        // eslint-disable-next-line no-alert
        alert('La contraseña debe contener al menos 8 caracteres, 1 mayúscula y 1 número.');
        return;
      }

      if (inputPass.value !== inputRepeatPass.value) {
        // eslint-disable-next-line no-alert
        alert('Las contraseñas deben coincidir.');
        return;
      }

      try {
        // await createAccount(inputUserName.value, inputEmail.value, inputPass.value);
        await createAccount(inputUserName.value, inputEmail.value, inputPass.value);
        navigateTo('/');
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('No se ha podido crear el usuario');
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Los campos son obligatorios.');
    }
  });

  formGrilla.append(
    labelEmail,
    inputEmail,
    labelUserName,
    inputUserName,
    labelPass,
    inputPass,
    labelRepeatPass,
    inputRepeatPass,
    btnAccount,
  );
  linkLogin.append(singIn);
  sectionAccount.append(logo, formGrilla, linkLogin);

  return sectionAccount;
}

export default newAccount;
