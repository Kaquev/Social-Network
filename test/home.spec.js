import { fireEvent, getByText } from '@testing-library/dom';
import { home } from '../src/component/home';
import {
  signInWithEmail, singInWithGoogle,
} from '../src/lib/firebase';

jest.mock('../src/lib/firebase');

describe('Home', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should be a function', () => {
    expect(typeof home).toBe('function');
  });
  it('should return a Promise', () => {
    expect(home()).toBeInstanceOf(Promise);
  });
  it('should return a section element with a class name called "section_home"', async () => {
    const navigateTo = jest.fn();
    const sectionElement = await home(navigateTo);
    expect(sectionElement.classList.contains('section_home')).toBe(true);
  });
  it('should exist "Iniciar sesión" button', async () => {
    const navigateTo = jest.fn();
    const element = await home(navigateTo);
    const button = getByText(element, 'Iniciar Sesión');
    expect(button).not.toBeNull();
  });
  it('should sign in successfully', async () => {
    const element = await home();
    const button = getByText(element, 'Iniciar Sesión');
    fireEvent(button, new MouseEvent('click', {}));
  });
  it('should execute "signInWithEmail" with email and password as arguments when click "Iniciar Sesión"', async () => {
    const navigateTo = jest.fn();
    const section = await home(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const inputEmail = section.querySelector('input[type="email"]');
    const inputPass = section.querySelector('input[type="password"]');
    const button = getByText(section, 'Iniciar Sesión');

    inputEmail.value = 'usuario@example.com';
    inputPass.value = 'Pass1234';

    button.click();
    expect(signInWithEmail).toHaveBeenCalledWith('usuario@example.com', 'Pass1234');
  });
  it('should execute "singInWithGoogle" when click "Sing in with Google"', async () => {
    const navigateTo = jest.fn();
    const section = await home(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const buttonGoogle = section.querySelector('#button_google');

    buttonGoogle.click();
    expect(singInWithGoogle).toHaveBeenCalledTimes(1);
  });
  it('should not execute "singInWithGoogle" correctly when click "Sing in with Google"', async () => {
    const navigateTo = jest.fn();
    const section = await home(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);
    singInWithGoogle.mockRejectedValue();

    const buttonGoogle = section.querySelector('#button_google');

    buttonGoogle.click();
    expect(singInWithGoogle).toHaveBeenCalledTimes(1);
  });
  it('should navigate to "/new_account" when click "Crear nueva cuenta"', async () => {
    const navigateTo = jest.fn();
    const section = await home(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const buttonNewAccount = section.querySelector('.btn_crear_cuenta');
    buttonNewAccount.click();
    expect(navigateTo).toHaveBeenCalledWith('/new_account');
  });
  it('should navigate to "/forget_password" when click "¿Olvidaste tu contraseña?"', async () => {
    const navigateTo = jest.fn();
    const section = await home(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const forgetPassword = section.querySelector('a');
    forgetPassword.click();
    expect(navigateTo).toHaveBeenCalledWith('/forget_password');
  });
});
