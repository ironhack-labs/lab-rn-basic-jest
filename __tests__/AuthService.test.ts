import { AuthService } from "../src/AuthService";
import { User } from "../src/types";

describe("User registration and authentication", () => {
  const authService = new AuthService();
  const user: User = {
    username: "jose.gastelum",
    password: "jos3g4s1elum@digitalfemsa",
  };

  it("Successful user registration", async () => {
    const registerResult = await authService.register(user);
    expect(registerResult).toBe(true);
  });

  it("Registration failed by repeated user", async () => {
    const registerResult = await authService.register(user);
    expect(registerResult).toBe(false);
  });

  it("SigIn with correct credentials", async () => {
    const loginResult = await authService.login(user);
    expect(loginResult).toBe(true);
  });

  it("SigIn in with incorrect credentials", async () => {
    const incorrectPassword = "pablo@digitalfemsa";
    const loginResult = await authService.login({
      username: user.username,
      password: incorrectPassword,
    });

    expect(loginResult).toBe(false);
  });
});
