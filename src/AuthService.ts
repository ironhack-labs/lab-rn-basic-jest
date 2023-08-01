import { User } from "./types";

export class AuthService {
  private registeredUsers: User[] = [];

  private findUserByName(username: string): User | undefined {
    return this.registeredUsers.find((x) => x.username === username);
  }

  register(user: User): Promise<boolean> {
    return new Promise<boolean>((res) => {
      if (this.findUserByName(user.username)) {
        res(false);
      }

      this.registeredUsers.push(user);

      res(true);
    });
  }

  login(userCredentials: User): Promise<boolean> {
    return new Promise<boolean>((res) => {
      const user = this.findUserByName(userCredentials.username);
      if (!user) res(false);

      res(user?.password === userCredentials.password);
    });
  }
}
