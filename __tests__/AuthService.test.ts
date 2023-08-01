import AuthService from "../src/AuthService";

describe("AuthService", () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  it("should successfully register a new user with valid credentials", async () => {
    const username = "fake-user";
    const password = "fake-password";

    const isRegistered = await authService.register(username, password);

    expect(isRegistered).toBe(true);

    const user = authService.registeredUsers.find(
      (user) => user.username === username
    );
    expect(user!.username).toBe(username);
    expect(user!.password).toBe(password);
  });

  it("should fail to register a new user with an already taken username", async () => {
    const username = "fake-user";
    const password = "fake-password";

    authService.register(username, password);

    const isRegistered = await authService.register(username, password);
    expect(isRegistered).toBe(false);
  });

  it("should fail to login with incorrect credentials", async () => {
    const username = "fake-user";
    const password = "wrong_password";
    const isLoggedIn = await authService.login(username, password);

    expect(isLoggedIn).toBe(false);
  });

  it("should fail to login with an invalid username", async () => {
    const username = "invalid_username";
    const password = "fake-password";
    const isLoggedIn = await authService.login(username, password);

    expect(isLoggedIn).toBe(false);
  });

  it("should fail to login with an empty username", async () => {
    const username = "";
    const password = "fake-password";
    const isLoggedIn = await authService.login(username, password);

    expect(isLoggedIn).toBe(false);
  });

  it("should fail to login with an empty password", async () => {
    const username = "fake-user";
    const password = "";
    const isLoggedIn = await authService.login(username, password);

    expect(isLoggedIn).toBe(false);
  });
});
