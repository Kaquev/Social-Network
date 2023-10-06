import { singInWithGoogle, signInWithEmail } from '../lib/firebase';

export const home = async (navigateTo) => {
  document.body.classList.remove('no-bg');
  const sectionHome = document.createElement('section');
  sectionHome.classList.add('section_home');

  const logo = document.createElement('img');
  logo.classList.add('img_logo');

  const errorLogin = document.createElement('p');
  errorLogin.setAttribute('id', 'incorrect_user');
  errorLogin.style.fontWeight = 'bolder';
  errorLogin.style.color = '#E8868C';
  errorLogin.textContent = 'Usuario o contraseña incorrectos';
  errorLogin.style.display = 'none';

  const formGrilla = document.createElement('form');
  formGrilla.classList.add('grilla_form');
  formGrilla.setAttribute('id', 'form_login');

  const labelEmail = document.createElement('label');
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  const labelPass = document.createElement('label');
  const inputPass = document.createElement('input');
  inputPass.type = 'password';

  const buttonGoogle = document.createElement('button');
  const btnGoogle = document.createElement('img');
  btnGoogle.src = '../asset/icons/btn_google_signin_light_normal_web@2x.png';
  buttonGoogle.id = 'button_google';
  btnGoogle.id = 'img_google';
  buttonGoogle.appendChild(btnGoogle);

  // buttonGoogle.textContent('');

  const lineaIcon = document.createElement('img');
  lineaIcon.classList.add('img_linea');

  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('button_login');

  const forgetPass = document.createElement('a');
  forgetPass.classList.add('forget_password');

  const newAccount = document.createElement('button');
  newAccount.classList.add('btn_crear_cuenta');

  logo.src = '../asset/icons/Logo.tripify.svg';
  lineaIcon.src = '../asset/icons/linea.icon.svg';

  buttonLogin.textContent = 'Iniciar Sesión';
  buttonLogin.setAttribute('type', 'submit');
  buttonLogin.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPass.value;
    try {
      await signInWithEmail(email, password);
      navigateTo('/feed');
    } catch (error) {
      errorLogin.style.display = 'block';
      formGrilla.reset();
    }
  });

  labelEmail.textContent = 'Nombre de usuario o correo';
  labelPass.textContent = 'Contraseña';
  inputPass.setAttribute('type', 'password');

  buttonGoogle.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      await singInWithGoogle();
      navigateTo('/feed');
    } catch (error) {
      errorLogin.style.display = 'block';
    }
  });

  forgetPass.textContent = '¿Olvidaste tu contraseña?';
  forgetPass.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/forget_password');
  });
  forgetPass.setAttribute('href', '');

  newAccount.textContent = 'Crear nueva cuenta';
  newAccount.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/new_account');
  });

  formGrilla.append(
    labelEmail,
    inputEmail,
    labelPass,
    inputPass,
    buttonLogin,
    lineaIcon,
    buttonGoogle,
    forgetPass,
    newAccount,
  );
  sectionHome.append(logo, errorLogin, formGrilla);

  return sectionHome;
};
