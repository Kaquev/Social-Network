import { feed } from '../src/component/feed.js';
import {
  userSignOut, getPosts, getLikes,
} from '../src/lib/firebase';

jest.mock('../src/lib/firebase');

describe('Feed', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should be a function', () => {
    expect(typeof feed).toBe('function');
  });
  it('should show all posts', async () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    // Configura el mock para la función getPosts
    getPosts.mockResolvedValue([
      { id: 'post-1', userId: 'id-del-usuario', name: 'Post 1', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 1' },
      { id: 'post-2', userId: 'otro-id', name: 'Post 2', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 2' },
    ]);

    getLikes.mockResolvedValue([
      { userId: 'id-del-usuario', postId: 'post-1' },
      { userId: 'otro-id', postId: 'post-1' },
    ]);

    const section = await feed(navigateTo, getUserPhoto);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    expect(document.body.innerHTML).toContain('Contenido del Post 1');
    expect(document.body.innerHTML).toContain('Contenido del Post 2');
  });
  it('should log out when click "Cerrar Sesión"', async () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    // Configura el mock para la función getPosts
    getPosts.mockResolvedValue([
      { id: 'post-1', userId: 'id-del-usuario', name: 'Post 1', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 1' },
      { id: 'post-2', userId: 'otro-id', name: 'Post 2', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 2' },
    ]);

    getLikes.mockResolvedValue([
      { userId: 'id-del-usuario', postId: 'post-1' },
      { userId: 'otro-id', postId: 'post-1' },
    ]);

    const section = await feed(navigateTo, getUserPhoto);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);
    const logOutButton = section.querySelector('.btn_logout');

    logOutButton.click();

    expect(userSignOut).toHaveBeenCalledTimes(1);
  });
  it('should not log out when click "Cerrar Sesión"', async () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    // Configura el mock para la función getPosts
    getPosts.mockResolvedValue([
      { id: 'post-1', userId: 'id-del-usuario', name: 'Post 1', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 1' },
      { id: 'post-2', userId: 'otro-id', name: 'Post 2', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 2' },
    ]);

    getLikes.mockResolvedValue([
      { userId: 'id-del-usuario', postId: 'post-1' },
      { userId: 'otro-id', postId: 'post-1' },
    ]);

    const section = await feed(navigateTo, getUserPhoto);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    userSignOut.mockRejectedValue();

    const logOutButton = section.querySelector('.btn_logout');

    logOutButton.click();

    expect(userSignOut).toHaveBeenCalledTimes(1);
  });
  it('should navigate to "/profile" when click to the profile picture', async () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    // Configura el mock para la función getPosts
    getPosts.mockResolvedValue([
      { id: 'post-1', userId: 'id-del-usuario', name: 'Post 1', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 1' },
      { id: 'post-2', userId: 'otro-id', name: 'Post 2', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 2' },
    ]);

    getLikes.mockResolvedValue([
      { userId: 'id-del-usuario', postId: 'post-1' },
      { userId: 'otro-id', postId: 'post-1' },
    ]);

    const section = await feed(navigateTo, getUserPhoto);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const profilePhoto = section.querySelector('#profile_photo');

    profilePhoto.click();

    expect(navigateTo).toHaveBeenCalledWith('/profile');
  });
  it('should navigate to "/create_post" when click the icon', async () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    // Configura el mock para la función getPosts
    getPosts.mockResolvedValue([
      { id: 'post-1', userId: 'id-del-usuario', name: 'Post 1', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 1' },
      { id: 'post-2', userId: 'otro-id', name: 'Post 2', creationDate: { toDate: () => new Date() }, content: 'Contenido del Post 2' },
    ]);

    getLikes.mockResolvedValue([
      { userId: 'id-del-usuario', postId: 'post-1' },
      { userId: 'otro-id', postId: 'post-1' },
    ]);

    const section = await feed(navigateTo, getUserPhoto);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const addPost = section.querySelector('#add_post');

    addPost.click();

    expect(navigateTo).toHaveBeenCalledWith('/create_post');
  });
});
