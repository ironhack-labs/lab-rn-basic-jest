import { AuthService } from "../src/AuthService";
import { Users } from "./data";

describe("Auth service", () => {
  let authService: AuthService;
  const registeredUsers = Users.slice(0, 5);
  const notRegisteredUsers = Users.slice(6, 10);

  beforeEach(() => {
    authService = new AuthService();
  });

  describe("register and login", () => {
    it("shoulds return false when username or password provided are empty", async () => {
      const { username, password } = notRegisteredUsers[0];

      await expect(authService.register("", password)).resolves.toBeFalsy();
      await expect(authService.register(username, "")).resolves.toBeFalsy();
    });

    describe("users are already registered", () => {
      beforeEach(async () => {
        for (const user of registeredUsers) {
          await authService.register(user.username, user.password);
        }
      });

      it("return false when username is already exists", async () => {
        const { username, password } = registeredUsers[0];

        await expect(
          authService.register(username, password)
        ).resolves.toBeFalsy();
      });

      it("return true when username is available", async () => {
        const { username, password } = notRegisteredUsers[0];

        await expect(
          authService.register(username, password)
        ).resolves.toBeTruthy();
      });

      it("return false when username or password not match", async () => {
        const { username } = registeredUsers[0];
        const { password } = registeredUsers[1];

        const loginResult = await authService.login(username, password);
        expect(loginResult).toBe(false);
      });

      it("sigin with correct credentials", async () => {
        const { username, password } = registeredUsers[0];

        const loginResult = await authService.login(username, password);
        expect(loginResult).toBe(true);
      });
    });
  });
});
