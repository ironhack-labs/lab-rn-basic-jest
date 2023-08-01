// authService.test.ts

import AuthService from "../src/AuthService";

describe("AuthService", () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  it("should register a new user successfully", async () => {
    const username = "testuser";
    const password = "testpassword";

    const result = await authService.register(username, password);

    expect(result).toBe(true);
  });

  it("should not allow registering with an existing username", async () => {
    const username = "existinguser";
    const password = "testpassword";

    // First registration
    const firstResult = await authService.register(username, password);
    expect(firstResult).toBe(true);

    // Second registration with the same username
    const secondResult = await authService.register(username, "newpassword");
    expect(secondResult).toBe(false);
  });

  it("should allow successful login with valid credentials", async () => {
    const username = "testuser";
    const password = "testpassword";

    await authService.register(username, password);

    const result = await authService.login(username, password);

    expect(result).toBe(true);
  });

  it("should not allow login with incorrect credentials", async () => {
    const username = "testuser";
    const password = "testpassword";

    await authService.register(username, password);

    const result = await authService.login(username, "wrongpassword");

    expect(result).toBe(false);
  });
});
