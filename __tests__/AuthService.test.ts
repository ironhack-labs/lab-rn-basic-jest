import AuthService from "../src/AuthService"; //Nuestro código de Auth

test('Hello world test', () => {
  expect('Hello world').toBe('Hello world');
});

// Agrupamos nuestras pruebas en un describe
describe('AuthService', () => {
  let authService: AuthService;

  // Inicializamos nuestro objeto como en las lecciones
  beforeEach(() => {
    authService = new AuthService();
  });

  // Ejecutamos un registro
  describe('register', () => {
    // Registro Exitoso
    it('should successfully register a new user', async () => {
      const username = 'testUser';
      const password = 'testPassword';

      const result = await authService.register(username, password);

      expect(result).toBe(true);
    });

    // Username Taken
    it('should fail to register with an already taken username', async () => {
      const username = 'existingUser';
      const password = 'existingPassword';

      await authService.register(username, password);

      const result = await authService.register(username, 'newPassword');

      expect(result).toBe(false);
    });

    // Usuario vacio
    it('should fail to register with an empty username', async () => {
      const username = '';
      const password = 'testPassword';

      const result = await authService.register(username, password);

      expect(result).toBe(false);
    });

    // Contrase;a vacia
    it('should fail to register with an empty password', async () => {
      const username = 'testUser';
      const password = '';

      const result = await authService.register(username, password);

      expect(result).toBe(false);
    });

    // Ambos campos vacios
    it('should fail to register with both empty username and password', async () => {
      const username = '';
      const password = '';

      const result = await authService.register(username, password);

      expect(result).toBe(false);
    });
  });

  // Pruebas de login
  describe('login', () => {
    // Prueba de login valida
    it('should successfully login with valid credentials', async () => {
      const username = 'validUser1';
      const password = 'validPassword';

      await authService.register(username, password);

      const result = await authService.login(username, password);

      expect(result).toBe(true);
    });

    // Login incorrecto
    it('should fail to login with invalid credentials', async () => {
      const username = 'validUser';
      const password = 'validPassword';

      await authService.register(username, password);

      const result = await authService.login(username, 'incorrectPassword');

      expect(result).toBe(false);
    });

    // Prueba de inicio de sesión fallido con nombre de usuario vacío
    it('should fail to login with empty username', async () => {
      const username = '';
      const password = 'testPassword';

      const result = await authService.login(username, password);

      expect(result).toBe(false);
    });

    // Login sin contrase;a
    it('should fail to login with empty password', async () => {
      const username = 'testUser';
      const password = '';

      const result = await authService.login(username, password);

      expect(result).toBe(false);
    });

    // Usuario no existente
    it('should fail to login with non-existing username', async () => {
      const username = 'nonExistingUser';
      const password = 'nonExistingPassword';

      const result = await authService.login(username, password);

      expect(result).toBe(false);
    });
  });
});
