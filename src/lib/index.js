/* aqui exportaras las funciones que necesites */

// eslint-disable-next-line import/no-mutable-exports
export let userSession;
export const saveUserSession = (user) => {
  userSession = user;
};
