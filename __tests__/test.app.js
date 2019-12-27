import ErrorRepository from '../src/app';

test('Добавление ошибки', () => {
  const err = new ErrorRepository();
  err.toSet('01', 'Первая ошибка');
  const expected = 'Первая ошибка';
  const received = err.translate('01');

  expect(received).toBe(expected);
});

test('Отсутсвие ошибки', () => {
  const err = new ErrorRepository();
  err.toSet('01', 'Первая ошибка');
  const expected = 'Unknown error';
  const received = err.translate('02');

  expect(received).toBe(expected);
});
