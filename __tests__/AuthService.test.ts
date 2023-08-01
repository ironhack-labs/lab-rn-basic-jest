// authService.test.ts
import AuthService from '../src/AuthService';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  test('Successful registration and login with valid credentials', async () => {
    const username = 'user123';
    const password = 'password123';

    // Register the user
    const registrationResult = await authService.register(username, password);
    expect(registrationResult).toBe(true);

    // Login with the registered credentials
    const loginResult = await authService.login(username, password);
    expect(loginResult).toBe(true);
  });

  test('Unsuccessful registration due to an already taken username', async () => {
    const username = 'existing_user';
    const password = 'password123';

    // Register the user once
    const registrationResult1 = await authService.register(username, password);
    expect(registrationResult1).toBe(true);

    // Try to register the user with the same username again
    const registrationResult2 = await authService.register(username, 'another_password');
    expect(registrationResult2).toBe(false);
  });

  test('Unsuccessful login due to incorrect credentials', async () => {
    const username = 'user456';
    const password = 'password123';

    // Register the user
    const registrationResult = await authService.register(username, password);
    expect(registrationResult).toBe(true);

    // Try to login with incorrect password
    const loginResult = await authService.login(username, 'wrong_password');
    expect(loginResult).toBe(false);
  });
});
