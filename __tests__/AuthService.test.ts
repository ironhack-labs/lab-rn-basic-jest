import AuthService from "../src/AuthService";

describe('AuthService', () => { 
  let authService = new AuthService();

  beforeEach(() => {
    authService = new AuthService();
  });

  test('should succesful registration and login with valid credentials', async() => {
    const username = 'user1';
    const password = 'password123';

    const registrationResult = await authService.register(username, password);
    expect(registrationResult).toBe(true);

    const loginResult = await authService.login(username, password);
    expect(loginResult).toBe(true);
  });

  test('Should unsuccesful registration due to an already taken username', async() => {
    const username = 'user2';
    const password = 'password123';

    await authService.register(username, password);
    const registrationResult = await authService.register(username, 'different password');
    expect(registrationResult).toBe(false);
  });

  test('should unsuccesful login due to incorrect credentials', async () => {
    const username = 'user3';
    const password = 'password123';

    await authService.register(username, password);
    const loginResult = await authService.login(username, 'wrong password');
    expect(loginResult).toBe(false);
  });

  test('should unsuccesful login for non-existing user', async () => {
    const username = 'user4';
    const password = 'password123';

    const loginResult = await authService.login(username, password);
    expect(loginResult).toBe(false);
  });
});