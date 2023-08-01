import type { User } from "../models";

export class AuthService {
  constructor(private readonly registeredUsers: User[] = []) {}

  register(username: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      if (!username || !password) return resolve(false);

      const userAlreadyExists = this.registeredUsers.some(
        (user) => user.username === username
      );
      if (userAlreadyExists) return resolve(false);

      this.registeredUsers.push({ username, password });
      return resolve(true);
    });
  }

  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      const userExists = this.registeredUsers.some(
        (user) => user.username == username && user.password == password
      );

      return resolve(userExists);
    });
  }
}
