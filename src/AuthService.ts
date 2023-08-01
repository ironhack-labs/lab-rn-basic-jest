interface User {
  username: string;
  password: string;
}

export default class AuthService {
  readonly registeredUsers: User[] = [];

  public register(username: string, password: string) {
    if (this.registeredUsers.some((user) => user.username === username)) {
      return Promise.resolve(false);
    }

    this.registeredUsers.push({ username, password });
    return Promise.resolve(true);
  }

  public login(username: string, password: string) {
    const user = this.registeredUsers.find(
      (user) => user.username === username
    );

    if (!user || user.password !== password) {
      return Promise.resolve(false);
    }

    return Promise.resolve(true);
  }
}
