import AuthService from '../src/AuthService';

test('Hello world test', () => {
  expect('Hello world!').toBe('Hello world!');
});

const authService = new AuthService();

test('Verificar el registro de usuarios', async () => {
  const test1 = await authService.register('gonzalo', 'Q}h<Sk4Y');
  expect(test1).toBe(true);

  const test2 = await authService.register('omar', '5{N+Xf{(');
  expect(test2).toBe(true);

  const test3 = await authService.register('lety', '');
  expect(test3).toBe(false);

  const test4 = await authService.register('', 'pass');
  expect(test4).toBe(false);

  const test5 = await authService.register('', '');
  expect(test5).toBe(false);
});

test('Verificar la autenticación de usuarios', async () => {
  const test1 = await authService.login('gonzalo', 'Q}h<Sk4Y');
  expect(test1).toBe(true);

  const test2 = await authService.login('omar', '123456');
  expect(test2).toBe(false);

  const test3 = await authService.login('omar', '5{N+Xf{(');
  expect(test3).toBe(true);

  const test4 = await authService.login('gabriela', 'abcdef');
  expect(test4).toBe(false);

  const test5 = await authService.login('omar', '');
  expect(test5).toBe(false);

  const test6 = await authService.login('', '5{N+Xf{(');
  expect(test6).toBe(false);

  const test7 = await authService.login('', '');
  expect(test7).toBe(false);
});