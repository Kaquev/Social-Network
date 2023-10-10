import forgetPass from '../src/component/forgetpassword';
import {
  resetEmail,
} from '../src/lib/firebase';

jest.mock('../src/lib/firebase');

describe('Forget password', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should be a function', () => {
    expect(typeof forgetPass).toBe('function');
  });
  it('should return a HTML element', () => {
    expect(forgetPass()).toBeInstanceOf(HTMLElement);
  });
  it('should return a section element with a class name called "reset_password_container"', () => {
    expect(forgetPass().className).toBe('reset_password_container');
  });
  it('should return a section element with a child element', () => {
    expect(forgetPass().children).toHaveLength(4);
  });
  it('should execute "resetEmail" with an email as argument when submitting the form', async () => {
    const navigateTo = jest.fn();
    const section = forgetPass(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);
    resetEmail.mockResolvedValue('Éxito');

    const inputEmail = section.querySelector('[type="email"]');
    const buttonSendEmail = section.querySelector('button');

    inputEmail.value = 'usuario@example.com';

    buttonSendEmail.click();

    expect(resetEmail).toHaveBeenCalledTimes(1);
  });
  it('should execute "resetEmail" with an invalid email as argument when submitting the form', async () => {
    const navigateTo = jest.fn();
    const section = forgetPass(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);
    resetEmail.mockRejectedValue('');

    const inputEmail = section.querySelector('[type="email"]');
    const buttonSendEmail = section.querySelector('button');

    inputEmail.value = 'usuario@example.com';

    buttonSendEmail.click();

    expect(resetEmail).toHaveBeenCalledTimes(1);
  });
  it('should navigate to "/" when click to "Volver a inicio"', () => {
    const navigateTo = jest.fn();
    const section = forgetPass(navigateTo);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const backHome = section.querySelectorAll('.reset_password_button')[1];
    backHome.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});
