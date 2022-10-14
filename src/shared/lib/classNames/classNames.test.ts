import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first argument', () => {
    expect(classNames('someClass'))
      .toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class2', 'class3']))
      .toBe('someClass class2 class3');
  });

  test('test single mod', () => {
    expect(classNames('someClass', { mod_class: true }))
      .toBe('someClass mod_class');
  });

  test('test many mods', () => {
    expect(classNames('someClass', { mod_class: true, mod_class2: false }))
      .toBe('someClass mod_class');
  });

  test('test mod undefinded', () => {
    expect(classNames('someClass', { mod_class: true, mod_class2: undefined }))
      .toBe('someClass mod_class');
  });
});
