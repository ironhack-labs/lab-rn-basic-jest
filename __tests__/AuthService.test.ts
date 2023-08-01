import { AuthService, Users } from "../src/AuthService";

describe('Tests on AuthService', () => {
  test('Registration successful', async () => {

    const newUser = {
      username: 'jackryan',
      password: 'jack0ry4n'
    };

    const authService: AuthService = new AuthService();
    const apiResponse = await authService.register(newUser.username, newUser.password);
    
    expect(apiResponse).toBe(true)
  });

  test('Login successful', async () => {

    const newUser = {
      username: 'mrrobot',
      password: '3ll10t'
    };

    const authService: AuthService = new AuthService();
    const apiResponse = await authService.login(newUser.username, newUser.password);
    
    expect(apiResponse).toBe(true)
  });


  test('Unsuccessful registration', async () => {

    const newUser = {
      username: 'wadewinston',
      password: 'sh00t&run'
    };
    
    const authService: AuthService = new AuthService();
    const apiResponse = await authService.register(newUser.username, newUser.password)
    expect(apiResponse).toBe(true);
  });

  test('Unsuccessful login', async () => {

    const loginUser = {
      username: 'brucewayne',
      password: 'metropolis'
    };

    const authService: AuthService = new AuthService();
    const apiResponse = await authService.login(loginUser.username, loginUser.password);
    
    expect(apiResponse).toBe(false)
  });
});