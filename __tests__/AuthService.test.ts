import AuthService from "../src/AuthService";

describe("AuthService", () => {
  let authService: AuthService;

  beforeEach(() => {
    // Before each test, create a new instance of AuthService
    authService = new AuthService();
  });

  describe("register", () => {
    it("should register a new user successfully", async () => {
      const username = "testuser";
      const password = "testpassword";

      const result = await authService.register(username, password);
      expect(result).toBe(true);
      expect(await authService.login(username, password)).toBe(true);
    });

    it("should not register a user with an existing username", async () => {
      const username = "testuser";
      const password = "testpassword";

      // Register a user with the same username before the test
      await authService.register(username, password);

      const result = await authService.register(username, "differentpassword");

      expect(result).toBe(false);
      // Make sure the password for the existing user hasn't changed
      expect(await authService.login(username, password)).toBe(true);
    });
  });

  describe("login", () => {
    it("should return true for correct username and password", async () => {
      const username = "testuser";
      const password = "testpassword";

      // Register a user with the same username before the test
      await authService.register(username, password);

      const result = await authService.login(username, password);

      expect(result).toBe(true);
    });

    it("should return false for incorrect password", async () => {
      const username = "testuser";
      const password = "testpassword";

      // Register a user with the same username before the test
      await authService.register(username, password);

      const result = await authService.login(username, "wrongpassword");

      expect(result).toBe(false);
    });

    it("should return false for non-existent username", async () => {
      const result = await authService.login("nonexistentuser", "anypassword");

      expect(result).toBe(false);
    });
  });

  // Additional Edge Cases
  describe("additional edge cases", () => {
    it("should not register with an empty username", async () => {
      const result = await authService.register("", "testpassword");

      expect(result).toBe(false);
    });

    it("should not register with an empty password", async () => {
      const result = await authService.register("testuser", "");

      expect(result).toBe(false);
    });

    it("should not log in with an empty username", async () => {
      const result = await authService.login("", "testpassword");

      expect(result).toBe(false);
    });

    it("should not log in with an empty password", async () => {
      const result = await authService.login("testuser", "");

      expect(result).toBe(false);
    });
  });
});
