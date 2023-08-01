import { AuthService } from "../src/AuthService";
import { USERS_DATA } from "../__mocks__";

describe("Auth service", () => {
  let authService: AuthService;
  const registeredUsers = USERS_DATA.slice(0, 5);
  const notRegisteredUsers = USERS_DATA.slice(6, 10);

  beforeEach(() => {
    authService = new AuthService();
  });

  describe("œregister", () => {
    it("shoulds return false when username or password provided are empty", async () => {
      const { username, password } = notRegisteredUsers[0];

      await expect(authService.register("", password)).resolves.toBeFalsy();
      await expect(authService.register(username, "")).resolves.toBeFalsy();
    });

    describe("when some users are already registered", () => {
      beforeEach(async () => {
        for (const user of registeredUsers) {
          await authService.register(user.username, user.password);
        }
      });

      it("shoulds return false when username is already exists", async () => {
        const { username, password } = registeredUsers[0];

        await expect(
          authService.register(username, password)
        ).resolves.toBeFalsy();
      });

      it("shoulds return true when username is available", async () => {
        const { username, password } = notRegisteredUsers[0];

        await expect(
          authService.register(username, password)
        ).resolves.toBeTruthy();
      });
    });
  });

  describe("@login", () => {
    beforeEach(async () => {
      for (const user of registeredUsers) {
        await authService.register(user.username, user.password);
      }
    });

    it("shoulds return false when username or password not match", async () => {
      const { username, password } = registeredUsers[0];

      await expect(
        authService.login(username, "invalid-password")
      ).resolves.toBeFalsy();
      await expect(
        authService.login("invalid-username", password)
      ).resolves.toBeFalsy();
    });

    it("shoulds return true when username and password math with some user registered", async () => {
      const { username, password } = registeredUsers[0];

      await expect(authService.login(username, password)).resolves.toBeTruthy();
    });
  });
});
