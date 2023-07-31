import AuthService from "../src/AuthService"; //Nuestro codigo de Auth

test('Hello world test', () => {
  expect('Hello world').toBe('Hello world');
});

//Agrupamos nuestras pruebas en un describe
describe('AuthService', () => {
  let authService: AuthService;

  //Inicializamos nuestro objeto como en las lecciones
  beforeEach(() => {
    authService = new AuthService();
  });

  //Ejecutamos un registro
  describe('register', () => {
    it('should successfully register a new user', async () => {
      const username = 'testUser';
      const password = 'testPassword';

      const result = await authService.register(username, password);

      expect(result).toBe(true);
    });

    it('should fail to register with an already taken username', async () => {
      const username = 'existingUser';
      const password = 'existingPassword';

      await authService.register(username, password);

      const result = await authService.register(username, 'newPassword');

      expect(result).toBe(false);//Aqui podemos cambiar el resultado para que la prueba pase o no
    });
  });

  describe('login', () => {
    it('should successfully login with valid credentials', async () => {
      const username = 'validUser1';
      const password = 'validPassword';

      await authService.register(username, password);

      const result = await authService.login(username, password);

      expect(result).toBe(true);//Nuestro resultado satisfactorio o no
    });

    it('should fail to login with invalid credentials', async () => {
      const username = 'validUser';
      const password = 'validPassword';

      await authService.register(username, password);

      const result = await authService.login(username, 'incorrectPassword');

      expect(result).toBe(false);
    });

    it('should fail to login with non-existing username', async () => {
      const username = 'nonExistingUser';
      const password = 'nonExistingPassword';

      const result = await authService.login(username, password);

      expect(result).toBe(false);
    });
  });
});