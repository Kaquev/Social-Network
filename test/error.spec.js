import error from '../src/component/error';

describe('Error', () => {
  it('should be a function', () => {
    expect(typeof error).toBe('function');
  });
  it('should return a HTML element', () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    const getUserId = jest.fn();
    expect(error(navigateTo, getUserPhoto, getUserId)).toBeInstanceOf(HTMLElement);
  });
  it('should return a section element with a class name called "error_container"', () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    const getUserId = jest.fn();
    expect(error(navigateTo, getUserPhoto, getUserId).className).toBe('error_container');
  });
  it('should navigate to "/" when there is not an user ID present', () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    const getUserId = jest.fn();
    const section = error(navigateTo, getUserPhoto, getUserId);

    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const backHome = section.querySelector('button');
    backHome.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
  it('should navigate to "/feed" when there is an user ID present', () => {
    const navigateTo = jest.fn();
    const getUserPhoto = jest.fn();
    const getUserId = jest.fn().mockResolvedValue('id-del-usuario');
    const section = error(navigateTo, getUserPhoto, getUserId);

    const root = document.createElement('div');
    root.id = 'root';
    root.appendChild(section);
    document.body.appendChild(root);

    const backHome = section.querySelector('button');
    backHome.click();
    expect(navigateTo).toHaveBeenCalledWith('/feed');
  });
});
