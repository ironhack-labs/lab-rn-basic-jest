import { AuthService } from "../src/AuthService";

describe("Auth Service", () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  test("Registration with valid credentials", async () => {
    const result = await authService.register("John", "Password");
    expect(result).toBeTruthy();
  });

  test("Login with valid credentials", async () => {
    await authService.register("John", "Password");
    const result = await authService.login("John", "Password");
    expect(result).toBe(true);
  });

  test("Registation with a repeated username", async () => {
    await authService.register("John", "Password");
    const result = await authService.register("John", "1234");
    expect(result).toBe(false);
  });

  test("Login with a non-existent user", async () => {
    const result = await authService.login("John", "1234");
    expect(result).toBe(false);
  });

  test("Login with a wrong user", async () => {
    await authService.register("John Doe", "1234");
    const result = await authService.login("John", "1234");
    expect(result).toBe(false);
  });

  test("Login with a wrong password", async () => {
    await authService.register("John", "1234");
    const result = await authService.login("John", "1234567");
    expect(result).toBe(false);
  });

  test("It's possible to register multiple users", async () => {
    await authService.register("John", "1234");
    await authService.register("Jane", "password");
    await authService.register("David", "aWb4");
    
    expect(authService.users["John"]).toBe("1234");
    expect(authService.users["Jane"]).toBe("password");
    expect(authService.users["David"]).toBe("aWb4");
  });
});