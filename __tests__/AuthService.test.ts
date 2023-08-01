import AuthService from "../src/AuthService";

describe('AuthService', () =>{
  let authService: AuthService;

  authService = new AuthService();
  const username = 'ericson';
  const password = 'password123'

  it('Succesfully singup and login', async () =>{

    const singupResult = await authService.register(username, password);
    expect(singupResult).toBe(true);
  })

  it('Singup failed with username already taken', async () =>{

    const singupResult = await authService.register(username, password);
    expect(singupResult).toBe(false);
  })

  it('Login with incorrect credentials', async () =>{
    const password2 = 'password1234'
    const loginResult = await authService.login(username, password2);
    expect(loginResult).toBe(false)
  })

  it('Login with correct credentials', async () => {
    const loginResult = await authService.login(username, password);
    expect(loginResult).toBe(true);
  })
})