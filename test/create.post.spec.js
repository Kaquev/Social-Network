import createPost from '../src/component/createpost';
import { newPost } from '../src/lib/firebase';

jest.mock('../src/lib/firebase');

describe('Create Post', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should be a function', () => {
    expect(typeof createPost).toBe('function');
  });
  it('should return a HTML element', () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    const getUserId = jest.fn();
    expect(createPost(navigateTo, getUserPhoto, getUserId)).toBeInstanceOf(HTMLElement);
  });
  it('should return a section element with a class name called "post_section"', () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    const getUserId = jest.fn();
    expect(createPost(navigateTo, getUserPhoto, getUserId).className).toBe('post_section');
  });
  it('should navigate to "/feed" when click icon"', () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    const getUserId = jest.fn();
    const section = createPost(navigateTo, getUserPhoto, getUserId);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const backToFeed = section.querySelector('i');
    backToFeed.click();
    expect(navigateTo).toHaveBeenCalledWith('/feed');
  });
  it('should create a new post when clicked', () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    const getUserId = jest.fn();
    const section = createPost(navigateTo, getUserPhoto, getUserId);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const textArea = section.querySelector('textarea');
    textArea.value = 'Hola';
    const postButton = section.querySelector('#post_button');
    postButton.click();
    expect(newPost).toHaveBeenCalledTimes(1);
  });
  it('should not create a new post when clicked', () => {
    const alert = console.error;
    console.error = () => {};
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    const getUserId = jest.fn();
    const section = createPost(navigateTo, getUserPhoto, getUserId);
    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const textArea = section.querySelector('textarea');
    textArea.value = '';
    const postButton = section.querySelector('#post_button');
    postButton.click();
    expect(newPost).toHaveBeenCalledTimes(0);
    console.error = alert;
  });
});
