/* import { btnAccount } from '../src/component/newaccount';
import { createAccount } from '../src/lib/firebase';

jest.mock('../src/lib/firebase', () => ({
  createAccount: jest.fn(),
}));

describe('Botón de Crear Cuenta', () => {
  let btnAccount;
  let inputEmail;
  let inputUserName;
  let inputPass;
  let inputRepeatPass;

  beforeEach((navigateTo) => {
    // Configurar elementos del DOM simulados antes de cada prueba
    document.body.innerHTML = `
        <button id="createAccountButton">Crear Cuenta</button>
        <input id="inputEmail" />
        <input id="inputUserName" />
        <input id="inputPass" />
        <input id="inputRepeatPass" />
      `;

    // Asignar elementos del DOM a las variables
    btnAccount = document.getElementById('createAccountButton');
    inputEmail = document.getElementById('inputEmail');
    inputUserName = document.getElementById('inputUserName');
    inputPass = document.getElementById('inputPass');
    inputRepeatPass = document.getElementById('inputRepeatPass');
  });

  it('debería crear una cuenta y redirigir al usuario si los datos son válidos', async () => {
    // Simular datos válidos
    inputEmail.value = 'usuario@ejemplo.com';
    inputUserName.value = 'usuario123';
    inputPass.value = 'Password1';
    inputRepeatPass.value = 'Password1';

    // Configurar el mock de createAccount para simular una creación exitosa de cuenta
    const mockUser = { id: 1, username: 'usuario123' };
    require('../src/lib/firebase').createAccount.mockResolvedValue(mockUser);

    // Configurar el mock de navigateTo para hacer seguimiento de las llamadas
    // const navigateToMock = jest.fn();
    // require('../src/main').navigateTo = navigateToMock;

    // Disparar un evento clic en el botón
    btnAccount.click();

    // Verificar que el mock de createAccount se llamó con los datos correctos
    expect(require('../src/lib/firebase').createAccount).toHaveBeenCalledWith('usuario123',
    'usuario@ejemplo.com',
    'Password1');

    // Verificar que el mock de navigateTo se llamó con la ruta correcta
    // expect(navigateTo('/')).toHaveBeenCalledWith('/');

    // Verificar que no se mostraron alertas de error
    expect(window.alert).not.toHaveBeenCalled();
  });

  // Escribe pruebas similares para otros casos, como validaciones de campos y manejo de errores
}); */
