import { profile } from '../src/component/profile';
import {
  getPosts,
} from '../src/lib/firebase';

jest.mock('../src/lib/firebase');

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: localStorageMock,
});

describe('Profile', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
  });
  it('should be a function', () => {
    expect(typeof profile).toBe('function');
  });
  it('should show the posts only from the active user', async () => {
    const navigateToMock = jest.fn();
    const getUserId = jest.fn();
    const getUserPhoto = jest.fn();
    const getUserName = jest.fn();

    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    window.sessionStorage.setItem('userId', 'id-del-usuario');

    getPosts.mockResolvedValue([
      { id: 'post-1', userId: 'id-del-usuario', name: 'Post 1', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 1' },
      { id: 'post-2', userId: 'otro-id', name: 'Post 2', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 2' },
    ]);

    const section = await profile(navigateToMock, getUserPhoto, getUserId, getUserName);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    expect(document.body.innerHTML).toContain('Contenido del Post 1');
    expect(document.body.innerHTML).not.toContain('Contenido del Post 2');
    expect(getItemSpy).toBeCalledWith('userId');
  });
  it('should navigate to "/feed" when click to the icon', async () => {
    const navigateToMock = jest.fn();
    const getUserId = jest.fn();
    const getUserPhoto = jest.fn();
    const getUserName = jest.fn();

    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    window.sessionStorage.setItem('userId', 'id-del-usuario');

    // Configura el mock para la función getPosts
    getPosts.mockResolvedValue([
      { id: 'post-1', userId: 'id-del-usuario', name: 'Post 1', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 1' },
      { id: 'post-2', userId: 'otro-id', name: 'Post 2', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 2' },
    ]);

    const section = await profile(navigateToMock, getUserPhoto, getUserId, getUserName);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const backTofeed = section.querySelector('#go_back');

    backTofeed.click();

    expect(navigateToMock).toHaveBeenCalledWith('/feed');
    expect(getItemSpy).toBeCalledWith('userId');
  });
  it('should navigate to "/create_post" when click to the icon', async () => {
    const navigateToMock = jest.fn();
    const getUserId = jest.fn();
    const getUserPhoto = jest.fn();
    const getUserName = jest.fn();
    // Configura el mock para la función getPosts

    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    window.sessionStorage.setItem('userId', 'id-del-usuario');

    getPosts.mockResolvedValue([
      { id: 'post-1', userId: 'id-del-usuario', name: 'Post 1', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 1' },
      { id: 'post-2', userId: 'otro-id', name: 'Post 2', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 2' },
    ]);

    const section = await profile(navigateToMock, getUserPhoto, getUserId, getUserName);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const createPost = section.querySelector('#add_post');
    createPost.click();

    expect(navigateToMock).toHaveBeenCalledWith('/create_post');
    expect(getItemSpy).toBeCalledWith('userId');
  });
});
