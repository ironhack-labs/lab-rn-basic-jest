// test('Hello world test', () => {
//   expect('Hello world').toBe('Hello world!');
// });
import AuthService from "../src/AuthService";

describe("AuthService", () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  describe("register", () => {
    it("Should successfully register a new user with valid credentials", async () => {
      const username = "alberto_herm";
      const password = "qwerty";

      const result = await authService.register(username, password);

      expect(result).toBe(true);
    });

    it("Should fail to register when the username is already taken", async () => {
      const username = "alberto_herm";
      const password1 = "qwerty1";
      const password2 = "qwerty2";

      //Registro del usuario original
      const result1 = await authService.register(username, password1);
      expect(result1).toBe(true);

      // Test intentando registrar el segundo usuario con el mismo nombre de usuario
      const result2 = await authService.register(username, password2);
      expect(result2).toBe(false);
    });
  });

  describe("login", () => {
    it("Should successfully log in with valid credentials", async () => {
      const username = "alberto_herm";
      const password = "qwerty";

      await authService.register(username, password);

      //Test intentando entrar con credenciales registradas
      const result = await authService.login(username, password);
      expect(result).toBe(true);
    });

    it("Should fail to log in with incorrect credentials", async () => {
      const username = "alberto_herm";
      const password = "Qwerty";
      const wrongPassword = "wrongPassword";

      await authService.register(username, password);

      // Test al intentar iniciar sesion con contraseña incorrecta
      const result = await authService.login(username, wrongPassword);
      expect(result).toBe(false);
    });

    it("Should fail to log in with non-existing username", async () => {
      const username = "alberto_herm";
      const password = "qwerty";

      await authService.register(username, password);

      // Test al intentar iniciar sesion con un nombre de usuario que no existe
      const result = await authService.login("non_existing_user", password);
      expect(result).toBe(false);
    });
  });
});
