import newAccount from '../src/component/newaccount';
import {
  createAccount,
} from '../src/lib/firebase'; // Importa el módulo de Firebase

jest.mock('../src/lib/firebase');

describe('Create new account', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  // eslint-disable-next-line jest/no-focused-tests
  it('should be a function', () => {
    expect(typeof newAccount).toBe('function');
  });
  // eslint-disable-next-line jest/no-focused-tests
  it('should return a HTML element', () => {
    expect(newAccount()).toBeInstanceOf(HTMLElement);
  });
  // eslint-disable-next-line jest/no-focused-tests
  it('should return a section element with a class name called "container_account"', () => {
    expect(newAccount().className).toBe('container_account');
  });
  // eslint-disable-next-line jest/no-focused-tests
  it('should navigate to "/" when click "Inicia sesión"', () => {
    const navigateTo = jest.fn();
    const section = newAccount(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const singIn = section.querySelector('a');
    singIn.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
  // eslint-disable-next-line jest/no-focused-tests
  it('should execute "createAccount" with username, email, and password as arguments when click "Crear cuenta"', () => {
    const navigateTo = jest.fn();
    const section = newAccount(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const inputEmail = section.querySelector('[type="email"]');
    const inputUserName = section.querySelector('[type="text"]');
    const inputPass = section.querySelector('[type="password"]');
    const inputRepeatPass = section.querySelectorAll('[type="password"]')[1];
    const btnAccount = section.querySelector('.btn_crear_cuenta');

    inputEmail.value = 'usuario@example.com';
    inputUserName.value = 'user123';
    inputPass.value = 'Pass123456';
    inputRepeatPass.value = 'Pass123456';

    btnAccount.click();

    expect(createAccount).toHaveBeenCalledWith('user123', 'usuario@example.com', 'Pass123456');
  });
  // eslint-disable-next-line jest/no-focused-tests
  it('should not execute "createAccount" due to lack of arguments when click "Crear cuenta"', () => {
    const navigateTo = jest.fn();
    const section = newAccount(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const btnAccount = section.querySelector('.btn_crear_cuenta');

    btnAccount.click();

    expect(createAccount).not.toHaveBeenCalled();
    mockAlert.mockRestore();
  });
  // eslint-disable-next-line jest/no-focused-tests
  it('should not execute "createAccount" correctly when click "Crear cuenta"', () => {
    const navigateTo = jest.fn();
    const section = newAccount(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);
    createAccount.mockRejectedValue();

    const inputEmail = section.querySelector('[type="email"]');
    const inputUserName = section.querySelector('[type="text"]');
    const inputPass = section.querySelector('[type="password"]');
    const inputRepeatPass = section.querySelectorAll('[type="password"]')[1];
    const btnAccount = section.querySelector('.btn_crear_cuenta');

    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    inputEmail.value = 'usuario@example.com';
    inputUserName.value = 'user123';
    inputPass.value = 'Pass123456';
    inputRepeatPass.value = 'Pass123456';

    btnAccount.click();

    expect(createAccount).toHaveBeenCalledTimes(1);
    mockAlert.mockRestore();
  });
  // eslint-disable-next-line jest/no-focused-tests
  it('should show an error alert due to invalid email', () => {
    const navigateTo = jest.fn();
    const section = newAccount(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const inputEmail = section.querySelector('[type="email"]');
    const inputUserName = section.querySelector('[type="text"]');
    const inputPass = section.querySelector('[type="password"]');
    const inputRepeatPass = section.querySelectorAll('[type="password"]')[1];
    const btnAccount = section.querySelector('.btn_crear_cuenta');

    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    inputEmail.value = 'usuario@example'; // Correo inválido
    inputUserName.value = 'user123';
    inputPass.value = 'Pass123456';
    inputRepeatPass.value = 'Pass123456';

    btnAccount.click();

    expect(createAccount).not.toHaveBeenCalled();
    mockAlert.mockRestore();
  });
  // eslint-disable-next-line jest/no-focused-tests
  it('should show an error alert due to invalid username', () => {
    const navigateTo = jest.fn();
    const section = newAccount(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const inputEmail = section.querySelector('[type="email"]');
    const inputUserName = section.querySelector('[type="text"]');
    const inputPass = section.querySelector('[type="password"]');
    const inputRepeatPass = section.querySelectorAll('[type="password"]')[1];
    const btnAccount = section.querySelector('.btn_crear_cuenta');

    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    inputEmail.value = 'usuario@example.com';
    inputUserName.value = 'u'; // Username inválido
    inputPass.value = 'Pass123456';
    inputRepeatPass.value = 'Pass123456';

    btnAccount.click();

    expect(createAccount).not.toHaveBeenCalled();
    mockAlert.mockRestore();
  });
  // eslint-disable-next-line jest/no-focused-tests
  it('should show an error alert due to invalid password', () => {
    const navigateTo = jest.fn();
    const section = newAccount(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const inputEmail = section.querySelector('[type="email"]');
    const inputUserName = section.querySelector('[type="text"]');
    const inputPass = section.querySelector('[type="password"]');
    const inputRepeatPass = section.querySelectorAll('[type="password"]')[1];
    const btnAccount = section.querySelector('.btn_crear_cuenta');

    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    inputEmail.value = 'usuario@example.com';
    inputUserName.value = 'user123';
    inputPass.value = 'pass'; // Contraseña inválida
    inputRepeatPass.value = 'pass';

    btnAccount.click();

    expect(createAccount).not.toHaveBeenCalled();
    mockAlert.mockRestore();
  });
  // eslint-disable-next-line jest/no-focused-tests
  it('should show an error alert due to invalid repeated password', () => {
    const navigateTo = jest.fn();
    const section = newAccount(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const inputEmail = section.querySelector('[type="email"]');
    const inputUserName = section.querySelector('[type="text"]');
    const inputPass = section.querySelector('[type="password"]');
    const inputRepeatPass = section.querySelectorAll('[type="password"]')[1];
    const btnAccount = section.querySelector('.btn_crear_cuenta');

    inputEmail.value = 'usuario@example.com';
    inputUserName.value = 'user123';
    inputPass.value = 'Pass12345';
    inputRepeatPass.value = 'Pass123456'; // Contraseña diferente

    btnAccount.click();

    expect(createAccount).not.toHaveBeenCalled();
    mockAlert.mockRestore();
  });
});
